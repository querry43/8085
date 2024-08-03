MattMon
=======

This is a silly little monitor program for my 8085 computer.

Usage
-----
Connect using picocom:

```
    picocom -b 9600 --send-cmd ./sendfile.py /dev/cu.usbserial-A104VAZR
```

Display memory at an address:
```
0
0000: fa

0000
0000: fa
```

Display memory at a range of addresses:
```
0.10
0000: fa af fa af fa af fa af fa af fa af fa af fa af
0010: 12 21 12 21 12 21 12 21 12 21 12 21 12 21 12 21
```

Write one or more bytes:
```
4000:abcdef
````

Jump to an address:
```
4000r
```

Picocom
-------

C-a C-x to exit
C-a C-s to send file


Resources
---------
* Someone's journey with CP/M on a Z80 - http://cpuville.com/Code/CPM-on-a-new-computer.html
* All of their built resources - http://cpuville.com/Code/CPM.html
* A Skeletal CBIOS - http://www.gaby.de/cpm/manuals/archive/cpm22htm/axb.htm
* CP/M resources - https://seasip.info/Cpm/index.html
