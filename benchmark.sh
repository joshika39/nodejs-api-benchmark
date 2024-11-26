#!/bin/bash

# This script is used to benchmark the performance of the server
# The tool will be used is wrk (https://github.com/wg/wrk)
# The port is in the  first argument (default is 3000)

PORT=${1:-3000}
HOST=${2:-localhost}

# Checking the base urls
wrk -t12 -c400 -d10s http://$HOST:$PORT/
wrk -t12 -c400 -d10s http://$HOST:$PORT/health

# Checking for the complex calculations
wrk -t12 -c400 -d10s http://$HOST:$PORT/calculation/10000
wrk -t12 -c400 -d20s http://$HOST:$PORT/calculation/100000
wrk -t12 -c400 -d20s http://$HOST:$PORT/calculation/1000000

