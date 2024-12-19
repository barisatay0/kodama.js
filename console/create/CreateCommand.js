const fs = require('fs');
const path = require('path');

function CreateCommand(name) {
    const Command = path.join(__dirname, `../templates/Command.js`);
    const CheckCommand = path.join(__dirname, `./${name}Command.js`);

    if (fs.existsSync(CheckCommand)) {
        console.error(`Command ${name} already exists at ${CheckCommand}`);
        process.exit(1);
    }

    const template = fs.readFileSync(Command, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(CheckCommand, content, 'utf-8');
    console.log(`Success: Command ${name} created successfully at ${CheckCommand}`);
}

module.exports = CreateCommand;