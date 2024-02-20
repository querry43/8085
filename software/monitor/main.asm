    .title 8085 Monitor
    .sbttl  A general purpose monitor for a custon 8085 computer
    .8085

    .globl stack
    .include "serial.def"

    lxi sp,stack
    jmp main

    .area interrupt5
    jmp serial.readbyte.async

    .area constants
prompt:
    .asciz "> "




; D XXXX YYYY	Dump memory from XXXX to YYYY
; E XXXX		Edit memory starting at XXXX (type an X and press enter to exit entry)
; G XXXX		GO starting at address XXXX (JMP in, no RET)
; I XX		Input from I/O port XX and display as hex
; O XX YY		Output to I/O port XX byte YY
; L           Load an Intel HEX file into memory

    .area code
main:
    call serial.setup

    lda prompt
    call serial.writestring

main.loop:
    call serial.readbyte.syncecho

    lda serial.buffer       ;   print(serial.buffer)
    cpi "d"
    jz main.dump

    jmp main.loop


main.dump:
    call serial.readbyte.syncecho
