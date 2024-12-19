const fs = require('fs');
const path = require('path');

function Create(name, type) {
    const Type = type.charAt(0).toUpperCase() + type.slice(1);
    const TemplatePath = path.join(__dirname, `../templates/${Type}.js`);
    const TargetPath = path.join(__dirname, `../../src/${type}s/${name}.js`);

    if (fs.existsSync(TargetPath)) {
        console.error(`${Type} ${name} already exists at ${TargetPath}`);
        process.exit(1);
    }

    const template = fs.readFileSync(TemplatePath, 'utf-8');
    const content = template
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(TargetPath, content, 'utf-8');
    console.log(`Success: ${Type} ${name} created successfully at ${TargetPath}`);
}

module.exports = Create;