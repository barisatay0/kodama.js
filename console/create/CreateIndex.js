const fs = require('fs');
const path = require('path');

function CreateIndex(name) {

        const indexPath = path.join(__dirname, '../../src/models/index.js');

        if (!fs.existsSync(indexPath)) {fs.writeFileSync(indexPath, `module.exports = {};\n`, 'utf-8');}
        const modelImport = `const { ${name} } = require('./${name}Model');\n`;
        const modelExport = `${name}`;

        let indexContent = fs.readFileSync(indexPath, 'utf-8');

        if (!indexContent.includes(modelImport)) {indexContent = modelImport + indexContent;}

        const exportsRegex = /module\.exports = \{([\s\S]*?)};/;
        indexContent = indexContent.replace(exportsRegex, (match, p1) => {
            const existingExports = p1.split(',').map(e => e.trim()).filter(Boolean);

            if (!existingExports.includes(modelExport)) {existingExports.push(modelExport);}

            return `module.exports = {\n    ${existingExports.join(',\n    ')}\n};`;
        });

        fs.writeFileSync(indexPath, indexContent, 'utf-8');
        console.log(`Updated index.js with ${name}Model`);
}

module.exports = CreateIndex;