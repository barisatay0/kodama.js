const fs = require('fs');
const path = require('path');
const CreateIndex = require("./CreateIndex");
const CreateRoute = require("./CreateRoute");

function CreateFile(type, name) {
    const dirPath = path.join(__dirname, `../../src/${type}s`);
    const filePath = path.join(dirPath, `${name}${type.charAt(0).toUpperCase() + type.slice(1)}.js`);

    if (fs.existsSync(filePath)) {console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} ${name} already exists!`);return false;}
    if (!fs.existsSync(dirPath)) {fs.mkdirSync(dirPath, { recursive: true });console.log(`Directory ${dirPath} created.`);}

    const content = fs.readFileSync(path.join(__dirname, `../templates/${type}.js`), 'utf-8')
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Success: ${type.charAt(0).toUpperCase() + type.slice(1)} ${name} created`);

    if (type === 'model') {CreateIndex(name, type);CreateRoute(name, type);}

    return true;
}

module.exports = CreateFile;