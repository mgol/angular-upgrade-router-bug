#!/usr/bin/env node

'use strict';

// This script makes sure Yarn is used to install dependencies instead of npm.

const userAgent = process.env.npm_config_user_agent;

if (!userAgent || !userAgent.startsWith('yarn/')) {
    console.error(`
        Use yarn instead of npm. See https://yarnpkg.com/en/docs/install for installation notes
        and invoke \`yarn\` instead of \`npm install\`.
    `);

    // eslint-disable-next-line no-process-exit
    process.exit(1);
}
