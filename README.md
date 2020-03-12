# 8085

This is my attempt to make a single board 8085 computer.  My goals are:
* serial console
* i/o ports
* cp/m

## Assembling

I don't know how to do this yet, but there should be a number of options.

* http://www.s100computers.com/Software%20Folder/Assembler%20Collection/Assembler%20Collection.htm
* brew install z80asm

Assemble and link with asxxx.
[Link](https://shop-pdp.net/ashtml/asxget.php)
```
harrinm@ADSKWVJ7744CDV:~/Downloads/asxv5pxx$ asxmak/linux/exe/as8085 -o as8085/t8085x.asm
harrinm@ADSKWVJ7744CDV:~/Downloads/asxv5pxx$ asxmak/linux/exe/aslink -i as8085/t8085x.rel
harrinm@ADSKWVJ7744CDV:~/Downloads/asxv5pxx$ less as8085/t8085x.hex
```

## Programming

Rom programming is done with an XGecu T48 and minipro.  Minipro needs to be modified to avoid this error:

```
IO error: bulk_transfer: LIBUSB_ERROR_OVERFLOW
```

See thread https://gitlab.com/DavidGriffith/minipro/-/issues/131 for more details.

Write intel hex to the eeprom, ignoring unused space:

```
./minipro -p M48Z02 -w gameboy-header.ihex -s --format ihex
```

Reading back the eeprom:

```
./minipro -p M48Z02 -r - | hexdump -C

Found T48 01.1.3 (0x103)
Warning: T48 support is experimental!
Warning: Firmware is out of date.
  Expected  1.1.28 (0x11c)
  Found     01.1.3 (0x103)
Device code: 38B10750
Serial code: 4BZWKZBNYXJUXP93OW5O5303
Reading Code...  0.01Sec  OK
00000000  ce ed 66 66 cc 0d 00 0b  03 73 00 83 00 0c 00 0d  |..ff.....s......|
00000010  00 08 11 1f 88 89 00 0e  dc cc 6e e6 dd dd d9 99  |..........n.....|
00000020  bb bb 67 63 6e 0e ec cc  dd dc 99 9f bb b9 33 3e  |..gcn.........3>|
00000030  ff ff ff ff ff ff ff ff  ff ff ff ff ff ff ff ff  |................|
*
00000800
```

## Documentation

[Instruction Set](https://github.com/querry43/8085/blob/master/software/assembler/instructions.txt)
[Monitor](http://www.s100computers.com/Software%20Folder/8080%20Monitor/8080.htm)
[MON-80](https://www.retrotechnology.com/restore/mon80_proms.html)
[SDCC](https://sdcc.sourceforge.net/)

### Components

| Component | Function         | Data Sheet |
|-----------|------------------|------------|
| 8085AP    | CPU              | [link](https://github.com/querry43/8085/blob/master/documentation/components/intel-8085-datasheet.pdf) |
| 8155      | RAM, IO, Timer   | [link](https://github.com/querry43/8085/blob/master/documentation/components/intel-8155-datasheet.pdf) |
| HM6116    | RAM              | [link](https://github.com/querry43/8085/blob/master/documentation/components/HM6116-MHS-datasheet.pdf) |
| 8251A     | Com Inter.       | [link](https://github.com/querry43/8085/blob/master/documentation/components/intel-8251-datasheet.pdf) |
| 8279-5    | Kbd/Disp Inter.  | [link](https://github.com/querry43/8085/blob/master/documentation/components/intel-8279-5-datasheet.pdf) |
| 74138     | 3 to 8 Decoder   | [link](https://github.com/querry43/8085/blob/master/documentation/components/74138-datasheet.pdf) |
| 74367     | Hex Buffer       | [link](https://github.com/querry43/8085/blob/master/documentation/components/74367-datasheet.pdf) |
| 74373     | Oct Latch        | [link](https://github.com/querry43/8085/blob/master/documentation/components/74373-datasheet.pdf) |

Additional components to consider purchasing:

| Component     | Function                 | Data Sheet |
|---------------|--------------------------|------------|
| M48Z02-150PC1 | NVRAM HM6116 Replacement | [link](https://github.com/querry43/8085/blob/master/documentation/components/m48z02.pdf) |
| 74154         | 4-16 Decoder, OBSOLETE   | [link](https://github.com/querry43/8085/blob/master/documentation/components/74154.pdf) |
| 74159         | 4-16 Decoder, OBSOLETE   | [link](https://github.com/querry43/8085/blob/master/documentation/components/74159.pdf) |
