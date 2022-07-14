#!/usr/bin/bash
ibmcloud login -g sfripp --apikey $apikey
ibmcloud ce project select -n sfripp-demos
ibmcloud ce jobrun submit --job flight-status -a job.js -a $1