const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_brownw15_products2', 'my.brownw15', 'ku7trk8e3', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false
});


module.exports = sequelize;
