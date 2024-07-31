    .title  Software Serial
    .sbttl  Receive bytes from SID and echo them to SOD at 9600 baud half duplex
    .8085

    ; ftdi serial instructions:
    ; screen /dev/cu.usbserial-A104VAZR 9600
    ; picocom -b 9600 /dev/cu.usbserial-A104VAZR

    .globl stack

    lxi sp,stack
    jmp main

    .area interrupt5
    jmp serial.readbyte.interrupt

    .include "bios.asm"

    mode.initial .equ #0xff
    mode.readstart .equ #0x00
    mode.readend .equ #0x01

    .area data
address.start:
    .ds 2
address.end:
    .ds 2
address.mode:
    .ds 1


    .area code
ready:
    .asciz "READY\r\n"
cr:
    .asciz "\r\n"
colon:
    .asciz ":"
space:
    .asciz " "


    .area code
main:
    call serial.setup
    call reset

    lxi h,ready
    call serial.writestring

main.loop:                  ; while (true) {
    hlt                     ;   select(serial)

    lda serial.byte         ;   a = serial.byte

    call serial.writebyte   ;     echo byte

main.parseend:
    cpi #"\r"               ;   if (a == '\r')
    jz main.runcommand      ;     run command

main.parsemode:
    cpi #"."                ;   if (a == '.')
    jz main.setmodeend      ;     start parsing end byte

main.parsenibble:
    cpi #"0"                ;   if (a < '0')
    jc main.writenothex     ;     not hex, start over

    cpi #"f"+1              ;   if (a > 'f')
    jnc main.writenothex    ;     not hex, start over

    cpi #"9"+#1             ;   if (a <= '9') {
    jnc main.notint
main.parseintnibble:
    sbi #"0"-#0x01          ;     a = atoi(a)
    call storenibble        ;     storenibble(a)
    jmp main.loop           ;     next
                            ;   }

main.notint:
    cpi #"a"                ;   if (a < 'a') {
    jc main.writenothex     ;     not hex, start over

main.parsealphanibble:
    sbi #0x57               ;     a = atoi(a)
    call storenibble        ;     storenibble(a)
    jmp main.loop           ;     next
                            ;   }
                            ; }

; Display an error and clear state
nothex: .asciz "\r\nnot hex\r\n"
main.writenothex:
    lxi h,nothex
    call serial.writestring
    call reset
    jmp main.loop


; If there is something to run, debug.  eventually run it...
main.runcommand:
    lda address.mode

    cpi mode.readend        ; if (address.mode <= mode.readend)
    jc main.printmem
    jz main.printmem        ;   printmem

    jmp main.runcommand.end ; else
                            ;   return

main.printmem:
    lhld address.start      ; align start address to 8-byte boundary for easy display
    mov a,l                 ; [address.start] = [address.start] & 0xfff0
    ani #0xf0               ; ex:
    mov l,a                 ;   0x0000 => 0x0000, 0x0009 => 0x0000, 0xffff => 0xfff0
    shld address.start

    ; should this align to the beginning as well?, wonder what's more convenient...
    lhld address.end        ; align end address to 8-byte boundary for easy display
    mov a,l                 ; [address.end] = [address.end] | 0x000f
    ori #0x0f               ; ex:
    mov l,a                 ;   0x0000 => 0x000f, 0x0009 => 0x000f, 0xffff => 0xffff
    mvi d,#0
    mvi e,#1
    dad d
    shld address.end

    lhld address.start      ; d = address.start
    xchg

    lxi h,cr
    call serial.writestring


main.printrow:              ; print the start address and 16 bytes from that address
                            ; ex  "0100: ff ff 01 00 ..."

    mov a,d                 ; print the row start address
    call printbyte
    mov a,e
    call printbyte

    lxi h,colon             ; print(":")
    call serial.writestring

    mvi b,#0                ; b = 0

main.printrow.loop:         ; print 16 mem values, proceeded each by " "
    mov a,b                 ; while (b < 16) {
    cpi #0x10
    jz main.printrow.end

    inr b                   ;   b++

    lxi h,space             ;   print " "
    call serial.writestring

    ldax d                  ;   print [de]
    call printbyte

    inx d                   ;   de++
    jmp main.printrow.loop  ; }

main.printrow.end:
    lxi h,cr                ; print "\r\n"
    call serial.writestring

    lhld address.end        ; if (current == end )
    mov a,d                 ;   end
    cmp h
    jnz main.printrow
    mov a,e
    cmp l
    jnz main.printrow

main.runcommand.end:
    call reset
    jmp main.loop


; Set mode to read end byte
main.setmodeend:
    mvi a,mode.readend
    sta address.mode
    jmp main.loop


; Reset all memory state
;
; Register usage:
;   a - temp
;   hl - data buffer
reset:
    push psw
    push h

    mvi l,#0
    mvi h,#0
    shld address.start

    mvi l,#0xff
    mvi h,#0xff
    shld address.end

    mvi a,mode.initial
    sta address.mode

    pop h
    pop psw
    ret


; Display some monitor state.
;
; Register usage:
;   a - nibble to store
;   hl - data buffer
startval:
    .asciz "start = "
endval:
    .asciz "end   = "
modeval:
    .asciz "mode  = "
stackval:
    .asciz "stack = "
debug:
    push psw
    push h

    lxi h,startval
    call serial.writestring
    lda address.start+#1
    call printbyte
    lda address.start
    call printbyte
    lxi h,cr
    call serial.writestring

    lxi h,endval
    call serial.writestring
    lda address.end+#1
    call printbyte
    lda address.end
    call printbyte
    lxi h,cr
    call serial.writestring

    lxi h,modeval
    call serial.writestring
    lda address.mode
    call printbyte
    lxi h,cr
    call serial.writestring

    lxi h,stackval
    call serial.writestring
    mvi h,#0
    mvi l,#0
    dad sp
    mov a,h
    call printbyte
    mov a,l
    call printbyte
    lxi h,cr
    call serial.writestring

    pop h
    pop psw
    ret
    

; Store the nibble to memory identified by address.mode, shifting existing nibbles left.
;
; Register usage:
;   a - nibble to store
;   hl - data buffer
storenibble:
    push psw
    push b

    mov b,a                 ; b = new nibble

    lda address.mode
    cpi mode.readend

    jz storenibble.readend
    jmp storenibble.readstart

storenibble.readstart:      ; if (address.mode != mode.readend)
    mvi a,mode.readstart    ;   address.mode = mode.readstart
    sta address.mode

    lhld address.start      ;   hl = [address.start]
    call storenibble.shftnib;   shift b into hl
    shld address.start      ;   [address.start] = hl
    jmp storenibble.end     ; }

storenibble.readend:        ; if (address.mode == mode.readend)
    lhld address.end        ;   hl = [address.end]
    call storenibble.shftnib;   shift b into hl
    shld address.end        ;   [address.end] = hl
    jmp storenibble.end     ; }

storenibble.end:
    pop b
    pop psw
    ret

storenibble.shftnib:        ; shift lower 4 bytes from b into hl
    dad h                   ; hl << 4
    dad h
    dad h
    dad h

    mov a,b                 ; a = new nibble
    ora l                   ; l = l | a
    mov l,a

    ret


; Write the lower nibble of A to serial as hex.
;
; Register usage:
;   a - nibble to display
;
; Example:
;   mvi a,#15
;   call printnibble ; prints "5"
;
;   mvi a,#2b
;   call printnibble ; prints "b"
printnibble:
    push psw
    ani #0x0f

    cpi #0xa
    jc printnibble.int

    adi #"a"-#10
    jmp printnibble.both

printnibble.int:
    adi #"0"

printnibble.both:
    call serial.writebyte
    pop psw
    ret

; Write the high nibble and the low nibble of accumulator to serial as hex.
;
; Register usage:
;   a - byte to write
;
; Example:
;   mvi a,#15
;   call printnibble ; prints "15"
;
;   mvi a,#2b
;   call printnibble ; prints "2b"
printbyte:
    push psw
    rar
    rar
    rar
    rar
    call printnibble
    ral
    ral
    ral
    ral
    call printnibble
    pop psw
    ret
