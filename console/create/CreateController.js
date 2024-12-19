const fs = require('fs');
const path = require('path');

function CreateController(name){
    const Controller = path.join(__dirname, `../templates/Controller.js`);
    const CheckController = path.join(__dirname, `../../src/controllers/${name}Controller.js`);

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

module.exports = CreateController;