#!/usr/bin/bash
ibmcloud login apikey <apikey> -r us-south
ibmcloud target -g <group>
ibmcloud ce project select -n <project>
ibmcloud ce jobrun submit --job <jobName> -a job.js -a $1 -a $2 -a $3 -a $4