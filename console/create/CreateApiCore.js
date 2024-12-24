const fs = require('fs');
const path = require('path');

function CreateApiCore(name, type) {
    const targetPath = path.join(__dirname, `../../src/${type}s/${name}${type.charAt(0).toUpperCase() + type.slice(1)}.js`);

    if (fs.existsSync(targetPath)) {
        return console.error(`${type} ${name} exists!`);
    }

    const content = fs.readFileSync(
        path.join(__dirname, `../templates/${type}.js`),
        'utf-8'
    )
        .replace(/variable/g, name)
        .replace(/variant/g, name.toLowerCase());

    fs.writeFileSync(targetPath, content, 'utf-8');
    console.log(`Success: ${type.charAt(0).toUpperCase() + type.slice(1)} ${name} created at ${targetPath}`);

    if (type === "model") {
        const indexPath = path.join(__dirname, '../../src/models/index.js');

        if (!fs.existsSync(indexPath)) {
            fs.writeFileSync(indexPath, `module.exports = {};\n`, 'utf-8');
        }

        const modelImport = `const { ${name} } = require('./${name}Model');\n`;
        const modelExport = `${name}`;

        let indexContent = fs.readFileSync(indexPath, 'utf-8');

        if (!indexContent.includes(modelImport)) {
            indexContent = modelImport + indexContent;
        }

        const exportsRegex = /module\.exports = \{([\s\S]*?)};/;
        indexContent = indexContent.replace(exportsRegex, (match, p1) => {
            const existingExports = p1.split(',').map(e => e.trim()).filter(Boolean);

            if (!existingExports.includes(modelExport)) {
                existingExports.push(modelExport);
            }

            return `module.exports = {\n    ${existingExports.join(',\n    ')}\n};`;
        });

        fs.writeFileSync(indexPath, indexContent, 'utf-8');
        console.log(`Updated index.js with ${name}Model`);
    }
}

module.exports = CreateApiCore;
