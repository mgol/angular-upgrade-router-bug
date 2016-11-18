#!/bin/bash

# NOTE: set the ANGULAR_CLI_GLOBAL_INSTALL environmental variable to false to skip
# global Angular CLI installation. This is not necessary, just if you want to avoid
# getting the global stuff touched.

set -u

if [ $# -lt 1 ]; then
    echo "USAGE: `basename $0` NEW_ANGULAR_VERSION"
    exit 1
fi

set -e
set -x

# TODO add @angular/router when 4.0.0 released (the versions will start being aligned then)
yarn add @angular/common@"$1" @angular/compiler@"$1" @angular/core@"$1" @angular/forms@"$1" @angular/http@"$1" @angular/platform-browser@"$1" @angular/platform-browser-dynamic@"$1" @angular/upgrade@"$1" @angular/compiler-cli@"$1"
