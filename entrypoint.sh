#!/bin/sh
npm i

npm rebuild esbuild

npm run build && rm -fr /var/www/html/* && cp -r dist/* /var/www/html/

exec "$@"