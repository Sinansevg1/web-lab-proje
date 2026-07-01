#!/bin/bash
set -e

SRC="/var/www/sinansevgi.com.tr-src"
LIVE="/var/www/sinansevgi.com.tr"
BRANCH="${GIT_BRANCH:-yonetim}"

cd "$SRC"
git fetch origin
git checkout "$BRANCH"
git pull origin "$BRANCH"
npm ci
npm run build
cp -r dist/. "$LIVE/"

echo "Frontend deploy tamamlandi: $LIVE"
