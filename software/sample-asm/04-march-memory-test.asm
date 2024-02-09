    .title  March C- Ram Test
    .sbttl  Test RAM using the March C- algorithm
    .8085

    ; the march c- algorythm
    ;
    ; for (i = memstart; i < maxmem; i++)
    ;     write(i) = 0
    ;
    ; for (i = memstart; i < maxmem; i++)
    ;     if (read(i) == 0) write(i) = 1
    ;     else fail
    ;
    ; for (i = memstart; i < maxmem; i++)
    ;     if (read(i) == 1) write(i) = 0
    ;     else fail
    ;
    ; for (i = maxmem-1; i >= memstart; i--)
    ;     if (read(i) == 0) write(i) = 1
    ;     else fail
    ;
    ; for (i = maxmem-1; i >= memstart; i--)
    ;     if (read(i) == 1) write(i) = 0
    ;     else fail
    ;
    ; pass

    ; test ram from memstart to memend-1, be sure not to overlap with code or stack
    ; data area must be in writable ram

    ; assemble with as8085 -o 04-march-memory-test.asm
    ; link with aslink -i -g stack=0xffff -g memstart=0x850 -g memend=0xff00 -a data=0x800 -a code=0x40 04-march-memory-test.rel
    ; program with minipro -p M48Z02 -w 04-march-memory-test.hex -s --format ihex
    ; dump with minipro -p M48Z02 -r - | hexdump -C

    .globl stack
    .globl memstart
    .globl memend

    lxi sp,stack
    jmp main

    .area data
mem.length:
    .ds 2   ; stores the length of memory


    .area code
main:
    call mem.calclength ; mem.length = memend - memstart

    call mem.zero       ; walk memory writing 0x00

    mvi b,0x00
    mvi c,0xff
    call mem.testinc    ; walk memory ascending expecting 0x00 and writing 0xff

    mvi b,0xff
    mvi c,0x00
    call mem.testinc    ; walk memory ascending expecting 0xff and writing 0x00

    mvi b,0x00
    mvi c,0xff
    call mem.testdec    ; walk memory descending expecting 0x00 and writing 0xff

    mvi b,0xff
    mvi c,0x00
    call mem.testdec    ; walk memory descending expecting 0xff and writing 0x00

    call pass


pass:
    mvi a,#0xc0     ; set SOD high
    sim
    hlt


fail:
    hlt


; Description: Determine the length of memory by subtracting
;   memstart from memend and storing the result in mem.length
;
; Register usage:
;   hl - memory start address
;   de - memory ed address
mem.calclength:
    push psw
    push h
    push d

    lxi d,memend
    lxi h,memstart
    call math.sub16     ; hl = memend - memstart
    shld mem.length

    pop d
    pop h
    pop psw
    ret


; Description: Zero memory starting from memstart for mem.length bytes
;
; Register usage:
;   hl - memory start address
;   de - memory length counter
mem.zero:
    push psw
    push h
    push d

    lhld mem.length     ; hl = memory length counter
    xchg                ; de = memory length counter
    lxi h,memstart      ; hl = memstart

mem.zero.loop:          ; do {
    mvi m,0             ;   mem[hl] = 0
    inx h               ;   hl++
    dcx d               ;   de--

    mov a,d
    ora e
    jnz mem.zero.loop   ; } while (de != 0)

    pop d
    pop h
    pop psw
    ret


; Description: Starting at memstart, walk memory ascending expecting to
;   read the value of B and write the value of C
;
; Register usage:
;   hl - memory start address
;   de - memory length counter
;
; Jumps to fail on memory test failure
mem.testinc:
    push psw
    push h
    push d

    lhld mem.length     ; hl = memory length counter
    xchg                ; de = memory length counter
    lxi h,memstart      ; hl = memstart

mem.testinc.loop:       ; do {
    mov a,m             ;   if (mem[hl] != b) {
    cmp b               ;       jump fail
    jnz fail            ;   }

    mov m,c             ;   mem[hl] = c

    inx h               ;   hl++
    dcx d               ;   de--

    mov a,d
    ora e
    jnz mem.testinc.loop; } while (de != 0)

    pop d
    pop h
   pop psw
    ret


; Description: Starting at memend-1, walk memory descending expecting to
;   read the value of B and write the value of C
;
; Register usage:
;   hl - memory start address
;   de - memory length counter
;
; Jumps to fail on memory test failure
mem.testdec:
    push psw
    push h
    push d

    lhld mem.length     ; hl = memory length counter
    xchg                ; de = memory length counter
    lxi h,memend-1      ; hl = memend-1

mem.testdec.loop:       ; do {
    mov a,m             ;   if (mem[hl] != b) {
    cmp b               ;       jump fail
    jnz fail            ;   }

    mov m,c             ;   mem[hl] = c

    dcx h               ;   hl--
    dcx d               ;   de--

    mov a,d
    ora e
    jnz mem.testdec.loop; } while (de != 0)

    pop d
    pop h
    pop psw
    ret


; Description: Subtract two 16 bit numbers
;
; Register usage:
;   hl - left operand and result
;   de - right operand
math.sub16:
    push psw
    push d

    mov a,e     ; l = e - l
    sub l
    mov l,a
    
    mov a,d     ; h = d - h
    sbb h
    mov h,a
    
    pop d
    pop psw
    ret
