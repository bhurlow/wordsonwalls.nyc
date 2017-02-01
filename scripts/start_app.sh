#! /bin/bash

VHOST=demo.wordsonwalls.nyc

docker run \
  -d \
  -p 3700:3000 \
  -e VIRTUAL_HOST=$VHOST \
  wordsonwalls


