    .title 8085 bios
    .8085

    sodhigh .equ #0xc0
    sodlow .equ #0x40
    readdelay .equ #0x0b
    writedelay .equ #0x0a
    stopbits .equ #0x01
    unmask .equ #0x08

    .area bios

; Setup serial data and interrupts
serial.setup:
    push psw

    mvi a,sodlow
    sim

    mvi a,#0x00
    sta serial.byte.ready

    mvi a,unmask
    sim

    ei

    pop psw
    ret


; Write the byte in B out SID lsb first.
;
; Serial is active high, bytes are inverted.
;
; Register usage:
;   a - byte to write
;   b - temp
;   c - byte counter
serial.writebyte::
    push psw
    push b

    mvi c,#0x09+stopbits            ; c = num bits to write
    stc                             ;   carry = 1

serial.writebyte.loop:              ; do {
    mov b,a
    mvi a,#0x80                     ;   a = 1000 0000
    rar                             ;   a = (carry) 100 0000
    sim
    mov a,b

    mvi b,writedelay
serial.writebyte.delayloop:         ; do {
    dcr b                           ;   d--
    jnz serial.writebyte.delayloop  ; } while (d > 0)

    stc                             ;   carry = 1
    rar                             ;   a >> 1, msb is carry (1), carry is lsb
    cmc                             ;   carry = !carry

    dcr c                           ;   c--
    jnz serial.writebyte.loop       ; } while (c != 0)

    pop b
    pop psw

    ret


; Write a zero terminated string using serial.writebyte.
;
; Register usage:
;   hl - address of zero terminated string
serial.writestring::
    push psw
    push h

serial.writestring.loop:            ; do {
    mov a,m                         ;   a = byte at hl

    ora a                           ;   if (a == 0)
    jz serial.writestring.end       ;     break

    call serial.writebyte           ;   print(a)

    inx h                           ;   hl++
    jmp serial.writestring.loop     ; }

serial.writestring.end:

    pop h
    pop psw

    ret


; Read a byte from serial and write it to memory.
;
; This is intended to be run as an interrupt.  The resulting byte is stored in
; serial.byte and serial.byte.ready is set to 1.
;
; Register usage:
;   b - result buffer
;   c - bit counter
;   d - delay counter
serial.readbyte.interrupt:
    di                              ; disable interrupts, this is time sensitive
    push psw
    push b
    push d

    mvi b,#0                        ; b = 0
    mvi c,#0x08                     ; c = 8 (number of bits)

                                    ; 1.5 delays put us in the center of the first bit
    mvi d,readdelay + (readdelay/2) ; d = readdelay * 1.5
serial.readbyte.halfdelay:          ; do {
    dcr d                           ;   d--
    jnz serial.readbyte.halfdelay   ; } while (d != 0)


serial.readbyte.loop:               ; do {
    rim                             ;   cary bit = serial in
    rlc

    mov a,b                         ;   a = b
    rar                             ;   a >> 1 including cary bit
    mov b,a                         ;   b = a

                                    ;   delay until half way through the next bit or stop bit
    mvi d,readdelay                 ;   d = readdelay
serial.readbyte.delay:              ;   do {
    dcr d                           ;       d--
    jnz serial.readbyte.delay       ;   } while (d != 0)


    dcr c                           ;   c--
    jnz serial.readbyte.loop        ; } while (c > 0)

    mov a,b                         ; serial.byte = received byte
    xri #0xff                       ; a = ~a
    sta serial.byte
    mvi a,#1                        ; serial.byte.ready = 1
    sta serial.byte.ready

    pop d
    pop b
    pop psw
    ei

    ret


    .area data
serial.byte::
    .ds 1    ; stores a read serial byte
serial.byte.ready::
    .ds 1    ; 1 if a byte is ready, 0 otherwise
