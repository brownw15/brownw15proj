const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_brownw15_products', 'my.brownw15', '3dhzl0lx', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false
});


module.exports = sequelize;
