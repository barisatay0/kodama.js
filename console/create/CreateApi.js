const fs = require('fs');
const path = require('path');
const CreateFile = require("./CreateFile");

function CreateApi(name, type) {
    let types = [`${type}`];
    if (type === 'api') {types = ['controller', 'model', 'service'];}

    const createdFiles = [];
    for (let currentType of types) {
        const isCreated = CreateFile(currentType, name);

        if (isCreated) {createdFiles.push(currentType);}
        else {
            console.log(`Cannot continue creation due to failure at ${currentType}`);
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
