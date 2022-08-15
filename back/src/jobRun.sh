#!/usr/bin/bash
ibmcloud login -g sfripp --apikey $apikey
ibmcloud ce project select -n sfripp-demos
ibmcloud ce jobrun submit --job calculate-food -a job.js -a $1 -a $2 -a $3 -a $4