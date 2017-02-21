FROM openjdk:8-jdk
RUN apt-get update
RUN apt-get install -y graphicsmagick
RUN mkdir /app
WORKDIR /app
ADD jars /app
ADD pages /app
CMD java -cp /app/jars/mirror.jar:$PWD mirror.cli :build
