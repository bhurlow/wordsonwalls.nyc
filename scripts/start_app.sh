#! /bin/bash

VHOST=wordsonwalls.nyc,www.wordsonwalls.nyc

  # --restart always \

docker run \
  -d \
  --name wordsonwalls \
  --restart always \
  -p 3700:3000 \
  -e VIRTUAL_HOST=$VHOST \
  -v /root/wordsonwalls:/wordsonwalls \
  openjdk:8-jre /bin/bash -c "cd /wordsonwalls && java -cp jars/mirror.jar:\$PWD mirror.cli :build"


# docker run \
#   -d \
#   -p 3700:3000 \
#   --restart always \
#   -e VIRTUAL_HOST=$VHOST \
#   -v /root/wordsonwalls:/app
#   bhurlow/mirror:0.2.1 

