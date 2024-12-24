const fs = require('fs');
const path = require('path');

function CreateFile(type, name) {
    const filePath = path.join(__dirname, `../../src/${type}s/${name}${type.charAt(0).toUpperCase() + type.slice(1)}.js`);
    if (fs.existsSync(filePath)) {
        console.error(`${type.charAt(0).toUpperCase() + type.slice(1)} ${name} already exists!`);
        return false;
    }

    const content = fs.readFileSync(path.join(__dirname, `../templates/${type}.js`), 'utf-8')
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Success: ${type.charAt(0).toUpperCase() + type.slice(1)} ${name} created`);
    return true;
}

function CreateApi(name) {
    const types = ['controller', 'model', 'service'];
    const createdFiles = [];

    for (let currentType of types) {
        const isCreated = CreateFile(currentType, name);

        if (isCreated) {
            createdFiles.push(currentType);
        } else {
            console.log(`Rolling back creation due to failure at ${currentType}`);
            createdFiles.forEach((type) => {
                const rollbackPath = path.join(__dirname, `../../src/${type}s/${name}.js`);
                if (fs.existsSync(rollbackPath)) {
                    fs.unlinkSync(rollbackPath);
                    console.log(`${type.charAt(0).toUpperCase() + type.slice(1)} ${name} rolled back`);
                }
            });
            break;
        }
    }
}

module.exports = CreateApi;
