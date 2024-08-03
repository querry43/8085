    .title  Mattmon
    .sbttl  Read and write to mem, usage similar to wozmon
    .8085

    ; ftdi serial instructions:
    ; picocom -b 9600 --send-cmd ./sendfile.py /dev/cu.usbserial-A104VAZR

    .globl stack

    lxi sp,stack
    jmp main

    .area interrupt5
    jmp serial.readbyte.interrupt

    .include "bios.asm"

    mode.initial .equ #0xff
    mode.readstart .equ #0x00
    mode.readend .equ #0x01
    mode.writehigh .equ #0x02
    mode.writelow .equ #0x03
    mode.run .equ #0x04

    .area data
address.start:
    .ds 2
address.end:
    .ds 2
address.write:
    .ds 1
address.mode:
    .ds 1


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

main.parsemode:
    cpi #"\r"               ;   if (a == '\r')
    jz main.runcommand      ;     run command
    cpi #"."                ;   if (a == '.')
    jz main.setmodeend      ;     start parsing end byte
    cpi #":"                ;   if (a == ':')
    jz main.setmodewrite    ;     start parsing writes
    cpi #"r"                ;   if (a == 'r')
    jz main.setmoderun      ;     set run mode

main.parsespace:
    cpi #" "                ;   if (a == ' ')
    jz main.loop            ;     next
    cpi #"\n"                ;   if (a == '\n')
    jz main.loop            ;     next

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
nothex: .asciz "\r\nnot hex: "
main.writenothex:
    lxi h,nothex
    call serial.writestring
    call printbyte
    lxi h,cr
    call serial.writestring
    call reset
    jmp main.loop


; Set mode to read end byte
main.setmodeend:
    mvi a,mode.readend
    sta address.mode
    jmp main.loop

; Set mode to write
main.setmodewrite:
    mvi a,mode.writehigh
    sta address.mode
    jmp main.loop

; Set mode to run
main.setmoderun:
    mvi a,mode.run
    sta address.mode
    jmp main.loop


; Run a command if we are no longer in the initial state
main.runcommand:
    lxi h,cr                ; print "\r\n"
    call serial.writestring

    lda address.mode

    cpi mode.readstart      ; if (address.mode == mode.readstart)
    jz main.printmem        ;   do printmem

    cpi mode.readend        ; if (address.mode == mode.readend)
    jz main.printmemrange   ;   do printmemrange

    cpi mode.run            ; if (address.mode == mode.run)
    jz main.run             ;   do run/jump

    jmp main.runcommand.end ; else
                            ;   return

main.printmem:              ; if (address.mode == mode.readstart)
    lhld address.start      ; d = address.start
    xchg

    mov a,d                 ; print the row start address
    call printbyte
    mov a,e
    call printbyte

    mvi a,#":"              ; print(":")
    call serial.writebyte

    mvi a,#" "              ; print(" ")
    call serial.writebyte

    ldax d                  ;   print [de]
    call printbyte

    lxi h,cr
    call serial.writestring
    jmp main.runcommand.end

main.printmemrange:         ; if (address.mode == mode.readend)
    lhld address.start      ; align start address to 8-byte boundary for easy display
    mov a,l                 ; [address.start] = [address.start] & 0xfff0
    ani #0xf0               ; ex:
    mov l,a                 ;   0x0000 => 0x0000, 0x0009 => 0x0000, 0xffff => 0xfff0
    shld address.start

    lhld address.end        ; align beginning of the next 8-byte boundary for easy display
    mov a,l                 ; [address.end] = ([address.end] | 0x000f) + 1
    ori #0x0f               ; ex:
    mov l,a                 ;   0x0000 => 0x0010, 0x0009 => 0x0010, 0xffff => 0x0000
    mvi d,#0
    mvi e,#1
    dad d
    shld address.end

    lhld address.start      ; d = address.start
    xchg

main.printrow:              ; print the start address and 16 bytes from that address
                            ; ex  "0100: ff ff 01 00 ..."

    mov a,d                 ; print the row start address
    call printbyte
    mov a,e
    call printbyte

    mvi a,#":"              ; print(":")
    call serial.writebyte

    mvi b,#0                ; b = 0

main.printrow.loop:         ; print 16 mem values, proceeded each by " "
    mov a,b                 ; while (b < 16) {
    cpi #0x10
    jz main.printrow.end

    inr b                   ;   b++

    mvi a,#" "              ;   print " "
    call serial.writebyte

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
    jmp main.runcommand.end

main.run:                   ; run the given address, does not return
    lxi sp,stack            ; reset the stack
    lhld address.start      ; jump to [address.start]
    pchl

main.runcommand.end:
    call reset
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
    shld address.end

    mvi a,mode.initial
    sta address.mode

    mvi a,#0
    sta address.write

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

    cpi mode.initial
    jz storenibble.readstart

    cpi mode.readstart
    jz storenibble.readstart

    cpi mode.writehigh
    jz storenibble.writehigh

    cpi mode.writelow
    jz storenibble.writelow

    jmp storenibble.readend

storenibble.readstart:      ; if (address.mode != mode.readend) {
    mvi a,mode.readstart    ;   address.mode = mode.readstart
    sta address.mode

    lhld address.start      ;   hl = [address.start]
    call storenibble.shftnib;   shift b into hl
    shld address.start      ;   [address.start] = hl
    jmp storenibble.end     ; }

storenibble.readend:        ; if (address.mode == mode.readend) {
    lhld address.end        ;   hl = [address.end]
    call storenibble.shftnib;   shift b into hl
    shld address.end        ;   [address.end] = hl
    jmp storenibble.end     ; }

storenibble.writehigh:      ; if (address.mode == mode.writehigh) {
    mov a,b                 ;   [address.write] = b
    sta address.write
    mvi a,mode.writelow     ;   [address.mode] = mode.writelow
    sta address.mode
    jmp storenibble.end     ; }

storenibble.writelow:       ; if (address.mode == mode.writelow) {
    lda address.write       ;   a = [address.write] << 4 | b
    rlc
    rlc
    rlc
    rlc
    ora b

    lhld address.start      ;   [address.start] = a
    xchg
    stax d
    xchg

    mvi a,mode.writehigh    ;   [address.mode] = mode.writehigh
    sta address.mode

    mvi a,#0                ;   address.write = 0
    sta address.write

    inx h                   ;   address.start++
    shld address.start

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
