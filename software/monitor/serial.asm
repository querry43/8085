    .title Software serial driver
    .8085

    sodhigh .equ #0xc0
    sodlow .equ #0x40
    unmaskinterrupts .equ #0x08
    readdelay .equ #0x0b
    writedelay .equ #0x0a
    stopbits .equ #0x05

    .include "serial.def"


; Setup serial by setting SOD high
;
; Register usage:
;   a - value for sim
serial.setup:
    push psw

    mvi a,sodhigh
    sim

    mvi a,unmaskinterrupts
    sta serial.buffer

    ei
    mvi a,#0x08
    sim

    pop psw
    ret


; Write the byte in B out SID lsb first.
;
; Register usage:
;   b - initial byte and temp
;   c - byte counter
;   d - delay counter
serial.writebyte:
    di                              ; disable interrupts, since reading is
                                    ; interrupt based
    push psw
    push b
    push d

    mvi c,#0x09+stopbits            ; c = num bits to write

serial.writebyte.loop:              ; do {
    mvi a,#0x80                     ;   a = 1000 0000
    rar                             ;   a = 0100 0000 + carry
    sim

    mvi d,writedelay
serial.writebyte.delayloop:         ; do {
    dcr d                           ;   d--
    jnz serial.writebyte.delayloop  ; } while (d > 0)

    mov a,b                         ;   a = b
    stc                             ;   carry = 1
    rar                             ;   a >> 1, msb is carry (1), carry is lsb
    mov b,a                         ;   b = a

    dcr c                           ;   c--
    jnz serial.writebyte.loop       ; } while (c != 0)

    pop d
    pop b
    pop psw

    ei                              ; enable interrupts

    ret


; Write a zero terminated string using serial.writebyte.
;
; Register usage:
;   hl - address of zero terminated string
serial.writestring:
    push psw
    push h

serial.writestring.loop:        ; do {
    mov a,m                     ;   a = byte at hl

    ora a                       ;   if (a == 0) {
    jz serial.writestring.end   ;     break
                                ;   }

    mov b,a                     ;   writebyte
    call serial.writebyte

    inx h                       ;   hl++
    jmp serial.writestring.loop ; }

serial.writestring.end:

    pop h
    pop psw

    ret


; Read a byte from serial and write it to memory.
;
; This is intended to be run as an interrupt.  The resulting byte is stored in
; serial.buffer and serial.buffer.len is set.
; to 1.
;
; Register usage:
;   b - result buffer
;   c - bit counter
;   d - delay counter
serial.readbyte.async:
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

    mov a,b                         ; serial.buffer = received byte
    sta serial.buffer
    mvi a,#0x01                     ; serial.buffer.len = 1
    sta serial.buffer.len

    pop d
    pop b
    pop psw
    ei

    ret


; Wait for a byte on serial, echo it back.
;
; Register usage:
;   b - temp buffer
serial.readbyte.syncecho:
    push psw
    push b

serial.readbyte.sync.loop:      ; do {
    hlt                         ;   sleep until interrupt

    lda serial.buffer.len       ;   if (serial.buffer.len == 0) {
    ori #0x00                   ;     continue
    jz serial.readbyte.sync.loop;   }
                                ; }

    lda serial.buffer       ;   print(serial.buffer)
    mov b,a
    call serial.writebyte

    pop b
    pop psw
    ret


    .area data
serial.buffer:
    .ds 1    ; stores a read serial byte
serial.buffer.len:
    .ds 1    ; the number of bytes in the serial buffer
