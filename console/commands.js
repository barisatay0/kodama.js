#!/usr/bin/env node
const {Create} = require('./create');
const args = process.argv.slice(2);
const command = args[0];
const type = args[1];
const name = args[2];

if (command === 'create') {Create(name,type);}
