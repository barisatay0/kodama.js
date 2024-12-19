const fs = require('fs');
const path = require('path');

function CreateService(name){
    const Service = path.join(__dirname, `../../src/services/Service.js`);
    const CheckService = path.join(__dirname, `../../src/services/${name}.js`);

    if (fs.existsSync(CheckService)) {
        console.error(`Service ${name} already exists at ${CheckService}`);
        process.exit(1);
    }
    if (!fs.existsSync(Service)) {
        console.error(`Example file not found: ${Service}`);
        process.exit(1);
    }

    const template = fs.readFileSync(Service, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckService, content, 'utf-8');
    console.log(`Success: Model ${name} created successfully at ${CheckService}`);
}

module.exports = CreateService;