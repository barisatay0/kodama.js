const fs = require('fs');
const path = require('path');

function CreateRoute(name) {
    const routePath = path.join(__dirname, '../../src/routes/api.js');
    if (!fs.existsSync(routePath)) {fs.writeFileSync(routePath, `const express = require('express');\nconst router = express.Router();\n\nmodule.exports = router;`, 'utf-8');}
    const routeImport = `const { ${name} } = require('../controllers/${name}Controller');\n`;
    const routeDefinitions = `

// ${name} routes
router.get('/${name}', ${name}.indexController);
router.post('/${name}', ${name}.createController);
router.post('/${name}/read', ${name}.readController);
router.post('/${name}/update', ${name}.updateController);
router.post('/${name}/remove', ${name}.removeController);

`;

    let RouteContent = fs.readFileSync(routePath, 'utf-8');
    if (!RouteContent.includes(routeImport)) {RouteContent = routeImport + RouteContent;}
    if (!RouteContent.includes(routeDefinitions.trim())) {
        const routerExportRegex = /module\.exports = router;/;
        if (routerExportRegex.test(RouteContent)) {RouteContent = RouteContent.replace(routerExportRegex, routeDefinitions + 'module.exports = router;');}
        else {RouteContent += routeDefinitions + '\nmodule.exports = router;';}
    }

    fs.writeFileSync(routePath, RouteContent, 'utf-8');
    console.log(`Updated api.js with routes for ${name}`);
}

module.exports = CreateRoute;
