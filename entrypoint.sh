#!/bin/sh

npm install -g deployvu-cli
npm ci
npm run build

deployvu-cli preview
