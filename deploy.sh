#!/bin/bash
git pull
yarn install
pm2 reload ecosystem.config.js --env production
# EOF
