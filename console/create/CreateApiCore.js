const fs = require('fs');
const path = require('path');

function CreateApiCore(name, type) {
    const targetPath = path.join(__dirname, `../../src/${type}s/${name}${type.charAt(0).toUpperCase() + type.slice(1)}.js`);

    if (fs.existsSync(targetPath)) return console.error(`${type} ${name} exists!`);

    const content = fs.readFileSync(path.join(__dirname, `../templates/${type}.js`), 'utf-8')
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(targetPath, content, 'utf-8');
    console.log(`Success: ${type.charAt(0).toUpperCase() + type.slice(1)} ${name} created at ${targetPath}`);
}

module.exports = CreateApiCore;
