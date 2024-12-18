const fs = require('fs');
const path = require('path');

function CreateCommand(name){
    const Command = path.join(__dirname, `./Command`);
    const CheckCommand = path.join(__dirname, `./${name}.js`);

    if (fs.existsSync(CheckCommand)) {
        console.error(`Command ${name} already exists at ${CheckCommand}`);
        process.exit(1);
    }
    if (!fs.existsSync(Command)) {
        console.error(`Example file not found: ${Command}`);
        process.exit(1);
    }

    const template = fs.readFileSync(Model, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckCommand, content, 'utf-8');
    console.log(`Success: Model ${name} created successfully at ${CheckCommand}`);
}

module.exports = CreateCommand;