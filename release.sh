#! /usr/bin/env bash
set -ex
git push
git mirror push
make upload
