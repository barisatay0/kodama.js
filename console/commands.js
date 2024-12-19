#!/usr/bin/env node
const {CreateController, CreateModel, CreateService, CreateCommand} = require('./create');
const args = process.argv.slice(2);
const command = args[0];
const type = args[1];
const name = args[2];

if (command === 'create' && type === 'controller') {CreateController(name,type);}
if (command === 'create' && type === 'model') {CreateModel(name,type);}
if (command === 'create' && type === 'service') {CreateService(name,type);}
if (command === 'create' && type === 'command'){CreateCommand(name,type);}
if (command === 'create' && type === 'api') {CreateModel(name,type);CreateService(name,type);CreateController(name,type);}
