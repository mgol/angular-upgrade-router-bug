#!/bin/bash

# NOTE: set the ANGULAR_CLI_GLOBAL_INSTALL environmental variable to false to skip
# global Angular CLI installation. This is not necessary, just if you want to avoid
# getting the global stuff touched.

set -e
set -u

# TODO ensure package.json exists here and has the correct name.

CLI_VERSION=`npm info angular-cli dist-tags.latest`

# Update the global angular-cli only if already installed.
# We have to use npm here as yarn always returns status 0.
set +e
npm -g ls angular-cli &>/dev/null
CLI_GLOBALLY_INSTALLED="$?"
set -e
set -x
if [ $CLI_GLOBALLY_INSTALLED -eq 0 ]; then
  npm --global install angular-cli@"$CLI_VERSION"
fi

yarn add angular-cli@"$CLI_VERSION"

ng init --skip-npm --style=scss --prefix=yg --routing
yarn
echo 'Run "yarn run update=angular ANGULAR_VERSION"'
