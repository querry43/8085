# 8085

This is my attempt to make a single board 8085 computer from a handful of 1980
era chips which were gifted to me some time ago.

My goals are:
* serial console
* i/o ports
* compact flash storage
* cp/m

## Assembling

Assembling is done with Alan Baldwin's suite of assemblers.  [Read more](https://shop-pdp.net/ashtml/asxget.php).

## Programming

Programming is done with [minipro](https://gitlab.com/DavidGriffith/minipro).

## Documentation

* [8080/8085 Assembly Language Programming](https://github.com/querry43/8085/blob/main/documentation/assembly/Intel%208080-8085%20Assembly%20Language%20Programming%201977%20Intel.pdf)
* [Assembly Language Conventions](https://github.com/querry43/8085/blob/main/documentation/assembly/asmguide.pdf)
* [CP/M Memory Map](https://obsolescence.wixsite.com/obsolescence/cpm-internals)
* [Assembler](https://shop-pdp.net/ashtml/asxxxx.php)
* [Programmer](https://gitlab.com/DavidGriffith/minipro)

## Similar Projects

* [SBC-85](https://bitsofthegoldenage.org/)
* [SDK-85](https://github.com/BitsOfTheGoldenAge/SDK-85)
* [Sim8085](https://www.sim8085.com/)

### Components

| Component     | Function        | Data Sheet |
|---------------|-----------------|------------|
| 8085AP        | CPU             | [link](https://github.com/querry43/8085/blob/main/documentation/components/intel-8085-datasheet.pdf) |
| 8155          | RAM, IO, Timer  | [link](https://github.com/querry43/8085/blob/main/documentation/components/intel-8155-datasheet.pdf) |
| HM6116        | 2K RAM          | [link](https://github.com/querry43/8085/blob/main/documentation/components/HM6116-MHS-datasheet.pdf) |
| AS6C1008      | 128K RAM        | [link](https://github.com/querry43/8085/blob/main/documentation/components/AS6C1008feb2007.pdf) |
| M48Z02-150PC1 | 2K NVRAM        | [link](https://github.com/querry43/8085/blob/main/documentation/components/m48z02.pdf) |
| 8251A         | Com Inter.      | [link](https://github.com/querry43/8085/blob/main/documentation/components/intel-8251-datasheet.pdf) |
| 8279-5        | Kbd/Disp Inter. | [link](https://github.com/querry43/8085/blob/main/documentation/components/intel-8279-5-datasheet.pdf) |
| 7404          | Hex Inverter    | [link](https://github.com/querry43/8085/blob/main/documentation/components/sn74ls04.pdf) |
| 7432          | Quad 2-Input OR | [link](https://github.com/querry43/8085/blob/main/documentation/components/sn74ls32.pdf) |
| 74138         | 3 to 8 Decoder  | [link](https://github.com/querry43/8085/blob/main/documentation/components/74138-datasheet.pdf) |
| 74273         | Oct D Flip-Flop | [link](https://github.com/querry43/8085/blob/main/documentation/components/sn54ls273-sp.pdf) |
| 74373         | Oct Latch       | [link](https://github.com/querry43/8085/blob/main/documentation/components/74373-datasheet.pdf) |
