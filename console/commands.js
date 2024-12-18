#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
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

function CreateController(name){
    const Controller = path.join(__dirname, `../src/controllers/Controller.js`);
    const CheckController = path.join(__dirname, `../src/controllers/${name}.js`);

    if (fs.existsSync(CheckController)) {
        console.error(`Controller ${name} already exists at ${CheckController}`);
        process.exit(1);
    }
    if (!fs.existsSync(Controller)) {
        console.error(`Example file not found: ${Controller}`);
        process.exit(1);
    }

    const template = fs.readFileSync(Controller, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckController, content, 'utf-8');
    console.log(`Success: Controller ${name} created successfully at ${CheckController}`);
}


function CreateModel(name){
    const Model = path.join(__dirname, `../src/models/Model.js`);
    const CheckModel = path.join(__dirname, `../src/models/${name}.js`);

    if (fs.existsSync(CheckModel)) {
        console.error(`Model ${name} already exists at ${CheckModel}`);
        process.exit(1);
    }
    if (!fs.existsSync(Model)) {
        console.error(`Example file not found: ${Model}`);
        process.exit(1);
    }

    const template = fs.readFileSync(Model, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckModel, content, 'utf-8');
    console.log(`Success: Model ${name} created successfully at ${CheckModel}`);
}

function CreateService(name){
    const Service = path.join(__dirname, `../src/services/Service.js`);
    const CheckService = path.join(__dirname, `../src/services/${name}.js`);

    if (fs.existsSync(CheckService)) {
        console.error(`Service ${name} already exists at ${CheckService}`);
        process.exit(1);
    }
    if (!fs.existsSync(Service)) {
        console.error(`Example file not found: ${Model}`);
        process.exit(1);
    }

    const template = fs.readFileSync(Service, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckService, content, 'utf-8');
    console.log(`Success: Model ${name} created successfully at ${CheckService}`);
}