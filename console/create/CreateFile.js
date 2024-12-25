const fs = require('fs');
const path = require('path');
const CreateIndex = require("./CreateIndex");

function CreateFile(type, name) {
    const filePath = path.join(__dirname, `../../src/${type}s/${name}${type.charAt(0).toUpperCase() + type.slice(1)}.js`);
    if (fs.existsSync(filePath)) {console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} ${name} already exists!`);return false;}

    const content = fs.readFileSync(path.join(__dirname, `../templates/${type}.js`), 'utf-8')
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Success: ${type.charAt(0).toUpperCase() + type.slice(1)} ${name} created`);
    if(type === 'model'){CreateIndex(name, type);}
    return true;
}

module.exports = CreateFile;