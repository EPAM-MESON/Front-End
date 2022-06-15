#!/bin/sh
npm i

npm rebuild esbuild

exec "$@"