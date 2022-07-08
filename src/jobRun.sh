#!/usr/bin/bash
ibmcloud login apikey $apikey -r us-south
ibmcloud target -g sfripp
ibmcloud ce project select -n sfripp-demos
ibmcloud ce jobrun submit --job imprimir-hora -a job.js -a $1