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

    .area code
ready:
    .asciz "READY\r\n"

main:
    call serial.setup

    lxi h,ready
    call serial.writestring

main.loop:                  ; do {
    hlt                     ;   select(serial)

    lda serial.byte         ;   print(serial.byte)
    call serial.writebyte

    jmp main.loop           ; } while (true)


    .include "bios.asm"
