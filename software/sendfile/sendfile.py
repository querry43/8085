#!/usr/bin/env python

import re
import sys
import time

def handleHexLine(line):
    parsedLine = parseHexLine(line)
    if parsedLine:
        sendLine(parsedLine)

def parseHexLine(line):
    parts = re.search("^:(?P<len>..)(?P<addr>....)00(?P<data>.*)", line)
    if not parts:
        return None
    addr = parts['addr'].lower()
    len = int(parts['len'], 16)
    data = parts['data'][:(len * 2)].lower()
    return f"{addr}:{data}\r\n"

# send roughly 65 bytes a second of data, considering the address
# portion of the line
def sendLine(parsedLine):
    for c in parsedLine:
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(0.005)

if __name__ == '__main__':
    hexfiles = sys.argv[1:]
    
    if not hexfiles:
        print(f"USAGE: {sys.argv[0]} file1 file2 ...")
        sys.exit(1)
    
    for hexfile in hexfiles:
        with open(hexfile, 'r') as file:
            for line in file.readlines():
                handleHexLine(line)
