# Container running Alan R. Baldwin's assemblers

## Getting started

```
docker compose build

docker run -v "$(pwd)":/opt/pwd asxxxx:latest as8085 -o sample.asm
docker run -v "$(pwd)":/opt/pwd asxxxx:latest aslink -i sample.rel

cat sample.hex
:040000003EC0307658
:00000001FF
```
