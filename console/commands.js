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
    const content = template.replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckController, content, 'utf-8');
    console.log(`Success: Controller ${name} created successfully at ${CheckController}`);
}

