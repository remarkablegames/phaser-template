#!/usr/bin/env sh

npm run build

# replace absolute URLs with relative URLs
if [ "$(uname)" == 'Darwin' ]; then
  sed -i '' -e 's|src="/|src="|g' -e 's|href="/|href="|g' dist/index.html
else
  sed -i -e 's|src="/|src="|g' -e 's|href="/|href="|g' dist/index.html
fi

# zip file
zip -r "dist/$(npm view . name)-$(npm view . version).zip" dist
echo
find dist -type f -depth 1 -name '*.zip'
open dist
