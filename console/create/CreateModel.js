const fs = require('fs');
const path = require('path');

function CreateModel(name){
    const Model = path.join(__dirname, `../../src/models/Model.js`);
    const CheckModel = path.join(__dirname, `../../src/models/${name}.js`);

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

module.exports = CreateModel;