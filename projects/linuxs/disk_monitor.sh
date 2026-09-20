#!/bin/bash
df -h | awk '$5 > 80 {print "Warning: "$1" is "$5" full"}'