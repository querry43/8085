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
unknowncommand:
    .asciz "unknown command\n"
invalidaddr:
    .asciz "invalid address\n"
gotaddr:
    .asciz "should read address\n"



; this version of the program should
;   1. echo all bytes on serial
;   2. echo a message if 'd' is detected
;   3. complain if any character after 'd' is < '0'
;   4. comaplain if the command is not 'd'


; D XXXX YYYY	Dump memory from XXXX to YYYY
; E XXXX		Edit memory starting at XXXX (type an X and press enter to exit entry)
; G XXXX		GO starting at address XXXX (JMP in, no RET)
; I XX		Input from I/O port XX and display as hex
; O XX YY		Output to I/O port XX byte YY
; L           Load an Intel HEX file into memory

    .area code
main:
    call serial.setup


main.loop:                          ; do {
    lxi h,prompt                    ;   print prompt
    call serial.writestring

    call serial.readbyte.syncecho

    lda serial.buffer

    cpi "d"                         ;   if (buffer == 'd') {
    jz dump                         ;     read dump command
    jmp main.loop                   ;     continue
                                    ;   }

    lxi h,unknowncommand            ;   else {
    call serial.writestring         ;       unknown command
                                    ;   }

    jmp main.loop                   ; }


; Display memory between two addresses
dump:
    push psw
    push h

    lxi h,gotaddr
    call serial.writestring

                                    ; read the "from" address
 dump.fromloop:                     ; do {
    call serial.readbyte.syncecho   ;   read serial byte
    lda serial.buffer
 
    cpi "0"-1                       ;   if (byte < '0') {
    jz dump.invalid                 ;       address is invalid
    jc dump.invalid
                                    ;   }

    jmp dump.fromloop               ; } while (true)
 
 dump.invalid:
    call invalidaddr

    pop h
    pop psw


;invalidaddr:
;    push psw
;    push h
;
;    lxi h,invalidaddr
;    call serial.writestring
;
;    pop h
;    pop psw
;    ret
