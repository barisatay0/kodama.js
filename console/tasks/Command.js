const fs = require('fs');
const path = require('path');

function Createvariable(name){
    const variable = path.join(__dirname, `../../src/models/variable.js`);
    const Checkvariable = path.join(__dirname, `../../src/models/${name}.js`);

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

module.exports = Createvariable;