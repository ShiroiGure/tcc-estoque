const Sequelize = require('sequelize');
const sequelize = new Sequelize('tccteste', 'root', '@Python123', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
    
});

module.exports = sequelize;