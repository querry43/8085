FROM rockylinux/rockylinux:10

RUN dnf install -y unzip

ADD https://shop-pdp.net/_ftp/asxxxx/5p50_exe_linux.zip /opt/asxxxx/5p50_exe_linux.zip
RUN unzip /opt/asxxxx/5p50_exe_linux.zip -d /opt/asxxxx/bin
RUN chmod 755 /opt/asxxxx/bin/*

ENV PATH="$PATH:/opt/asxxxx/bin"
RUN mkdir /opt/pwd

WORKDIR /opt/pwd
