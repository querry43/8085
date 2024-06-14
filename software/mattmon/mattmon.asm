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

    mode.readstart .equ #0x00
    mode.readend .equ #0x01

    .area data
address.start:
    .ds 2
address.end:
    .ds 2
address.mode:
    .ds 1



; ascii
; 0x30-0x39     0-9
; 0x61-0x66     a-f
; 0x3a          :
; 0x20          ' '
; 0x2e          .
; 0x72          r
; 0xa0          nl
; 0x0d          cr

    .area code
ready:
    .asciz "READY\r\n"
cr:
    .asciz "\r\n"


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
    cpi #0x0d               ;   if (a == '\n')
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

; This does very little so far, but will eventually do a thing...
main.runcommand:
    call debug
    jmp main.loop

; Set mode to read end byte
main.setmodeend:
    mvi a,mode.readend
    sta address.mode
    jmp main.loop


; Reset all local state
reset:
    push psw
    pop psw

    mvi l,#0
    mvi h,#0
    shld address.start
    shld address.end
    shld address.mode

    ret

; Display some monitor state.
startval:
    .asciz "start = "
endval:
    .asciz "end   = "
modeval:
    .asciz "mode  = "
debug:
    push psw
    push b
    push d

    lxi h,cr
    call serial.writestring

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

    pop d
    pop b
    pop psw
    ret
    

; Store the nibble to the stored address, shifting existing nibbles left.
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

    jz storenibble.readend  ; if (mode == mode.readend)
    lhld address.start      ;   hl = [address.start]
    jmp storenibble.readboth; else
storenibble.readend:
    lhld address.end        ;   hl = [address.end]

storenibble.readboth:
    dad h                   ; hl << 4
    dad h
    dad h
    dad h

    mov a,b                 ; a = new nibble
    ora l                   ; l = l | a
    mov l,a

    lda address.mode
    cpi mode.readend

    jz storenibble.writeend ; if (mode == mode.readend)
    shld address.start      ;   [address.start] = hl
    jmp storenibble.end     ; else
storenibble.writeend:
    shld address.end        ;   [address.end] = hl

storenibble.end:
    pop b
    pop psw
    ret


; Write the lower nibble of A to serial as hex.
;
; Register usage:
;   a - nibble to write
;
; Example:
;   mvi a,15
;   call printnibble ; prints "5"
;
;   mvi a,2b
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

; Prints the high nibble and the low nibble of accumulator.
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
