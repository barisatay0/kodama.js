#!/usr/bin/env node
const { Create } = require('./create');
const args = process.argv.slice(2);
const command = args[0];
const type = args[1];
const name = args[2];

const CreateTypes = ['controller', 'service', 'model'];

if (command === 'create' && CreateTypes.includes(type)) {Create(name, type);}