#!/usr/bin/env node
const {CreateApi, CreateApiCore} = require('./create');
const args = process.argv.slice(2);
const command = args[0];
const type = args[1];
const name = args[2];


const api_cores = ['controller', 'service', 'model'];

if (command === "create") {
    if (api_cores.includes(type)) {CreateApiCore(name, type);}
    else if (type === "api") {CreateApi(name);}
    else {
        console.log('There is no command like this.');
        console.log('Our command syntax is looking like "matic command type name" ');
        console.log('Example "matic create controller Controller_name" ');
    }
}