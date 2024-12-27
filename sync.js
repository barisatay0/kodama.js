const {sequelize} = require('./config/database');
require('./src/models');

(async () => {try {await sequelize.sync({force: true});console.log('Tables Successfully Created');} catch (err) {console.error(err);}})();

// node sync for synchronize your database !!This process going to delete your database!!