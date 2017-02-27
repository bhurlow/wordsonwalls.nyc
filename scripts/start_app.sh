#! /bin/bash

VHOST=demo.wordsonwalls.nyc

docker run \
  -d \
  -p 3700:3000 \
  --restart always \
  -e VIRTUAL_HOST=$VHOST \
  -v /root/wordsonwalls:/app
  bhurlow/mirror:0.2.1 

