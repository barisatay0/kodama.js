#!/usr/bin/env node
const { Create } = require('./create');
const args = process.argv.slice(2);
const command = args[0];
const type = args[1];
const name = args[2];

const CreateTypes = ['controller', 'service', 'model'];

if (command === 'create' && CreateTypes.includes(type)) {Create(name, type);}
else {
    console.log( 'There is no command like this.');
    console.log( 'Our command syntax is looking like "matic command type name" ');
    console.log( 'Example "matic create controller Controller_name" ');
}