#!/bin/sh


## SETUP SERVER
cd applications/devicesTask_serverApp-master
npm install
pwd
ls -l
nohup npm start &

cd ../..

## SETUP UI
cd applications/devices-clientapp-master
npm install
pwd
ls -l
nohup npm start &

cd ../..

## SETUP TEST PROJECT
npm install