#!/usr/bin/env node
const { CreateController, CreateModel, CreateService } = require('./tasks');
const args = process.argv.slice(2);
const command = args[0];
const subcommand  = args[1];
const name = args[2];

if (command === 'create' && subcommand === 'controller') {
    CreateController(name);
}
if (command === 'create' && subcommand === 'model') {
    CreateModel(name);
}

if (command === 'create' && subcommand === 'service') {
    CreateService(name);
}




