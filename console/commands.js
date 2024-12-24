#!/usr/bin/env node
const {apiStructure} = require('./create');
const args = process.argv.slice(2);
const command = args[0];
const type = args[1];
const name = args[2];

const valid_command = ['create'];
const valid_type = ['controller', 'service', 'model'];

if (valid_command.includes(command)) {
    if (valid_type.includes(type)) {apiStructure(name, type);}
    else {
        console.log('There is no command like this.');
        console.log('Our command syntax is looking like "matic command type name" ');
        console.log('Example "matic create controller Controller_name" ');
    }
}