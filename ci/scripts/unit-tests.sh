#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o xtrace

cd project-src
npm install
npm test