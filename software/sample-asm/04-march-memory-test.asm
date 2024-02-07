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

        ; assemble with as8085 -o 04-march-memory-test.asm
        ; link with aslink -i -g stack=0xffff -g memstart=0x800 -g memend=0xff00 04-march-memory-test.rel
        ; program with minipro -p M48Z02 -w 04-march-memory-test.hex -s --format ihex
        ; dump with minipro -p M48Z02 -r - | hexdump -C

        .globl stack
        .globl memstart
        .globl memend

        lxi sp,stack
        jmp start

        .area data
memlen: .ds 2

        .area code
start:
        call calcmem
        call zero

        ; expect 0x00, write 0xff
        mvi b,0x00
        mvi c,0xff
        call inctest

        ; ; expect 0xff, write 0x00
        mvi b,0xff
        mvi c,0x00
        call inctest

        ; ; expect 0x00, write 0xff
        mvi b,0x00
        mvi c,0xff
        call dectest

        ; ; expect 0xff, write 0x00
        mvi b,0xff
        mvi c,0x00
        call dectest

        call pass


        ; determine how long memory is, useful for counters.
        ; store result in memlen
calcmem:lxi d,memend
        lxi h,memstart
        call sub16      ; hl = memend - memstart = memory length
        shld memlen
        ret


        ; zero out all memory
zero:   push psw
        push h
        push d

        lhld memlen     ; hl = memory length counter
        xchg            ; de = memory length counter
        lxi h,memstart  ; hl = memstart

        ; this mvi breaks things, must be overwriting something important?
        ; but we cannot overwrite rom...
zloop:  mvi m,0         ; mem[hl] = 0
        inx h           ; hl++
        dcx d           ; de--

        mov a,d
        ora e
        jnz zloop

        pop d
        pop h
        pop psw
        ret


        ; loop over all memory ascending, expecting the value equal the
        ; contents of b and replacing it with the contents of c
inctest:lhld memlen     ; hl = memory length counter
        xchg            ; de = memory length counter
        lxi h,memstart

incloop:mov a,m         ; a = mem[hl]
        cmp b
        jnz fail
        mov m,c

        inx h           ; hl++
        dcx d           ; de--

        mov a,d
        ora e
        jnz incloop
        ret


        ; loop over all memory descending, expecting the value equal the
        ; contents of b and replacing it with the contents of c
dectest:push psw
        push h
        push d
        lhld memlen     ; hl = memory length counter
        xchg            ; de = memory length counter
        lxi h,memend-1

decloop:mov a,m         ; a = mem[hl]
        cmp b
        jnz fail
        mov m,c

        dcx h           ; hl--
        dcx d           ; de--

        mov a,d
        ora e
        jnz decloop

        pop d
        pop h
        pop psw
        ret


        ; hl = de - hl
sub16:  push psw
        push d

        ; l = e - l
        mov a,e
        sub l
        mov l,a

        ; h = d - h
        mov a,d
        sbb h
        mov h,a

        pop d
        pop psw
        ret

pass:   mvi a,#0xc0     ; set SOD high
        sim
        hlt

fail:   hlt
