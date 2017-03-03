#! /bin/bash

VHOST=demo.wordsonwalls.nyc

  # --restart always \

docker run \
  -it \
  -p 3700:3000 \
  -e VIRTUAL_HOST=$VHOST \
  -v /root/wordsonwalls:/wordsonwalls \
  openjdk:8-jre /bin/bash


# docker run \
#   -d \
#   -p 3700:3000 \
#   --restart always \
#   -e VIRTUAL_HOST=$VHOST \
#   -v /root/wordsonwalls:/app
#   bhurlow/mirror:0.2.1 

