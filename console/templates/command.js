const fs = require('fs');
const path = require('path');

// This example is a create function

function variableCommand(name){
    const variable = path.join(__dirname, `../variable.js`);
    const Checkvariable = path.join(__dirname, `../${name}.js`);

    if (fs.existsSync(Checkvariable)) {
        console.error(`Model ${name} already exists at ${Checkvariable}`);
        process.exit(1);
    }
    if (!fs.existsSync(variable)) {
        console.error(`Example file not found: ${variable}`);
        process.exit(1);
    }

    const template = fs.readFileSync(variable, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(Checkvariable, content, 'utf-8');

    console.log(`Success: variable ${name} created successfully at ${Checkvariable}`);
}

module.exports = variableCommand;