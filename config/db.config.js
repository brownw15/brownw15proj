const fixit = require('../config/fixit.js')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('my_brownw15_products2', 'my.brownw15', 'ku7trk8e3', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: fixit.max,
    min: fixit.pool.min,
    acquire: fixit.pool.acquire,
    idle: fixit.pool.idle
  }
});
const virtdb = {};
virtdb.Sequelize= Sequelize
virtdb.sequelize= sequelize;

virtdb.brand = require('../models/Brand.js')(sequelize, Sequelize);
virtdb.product = require('../models/Product.js')(sequelize, Sequelize);

virtdb.brand.hasMany(virtdb.product, {foreignKey: 'fk_brandid', sourceKey: 'uuid'});

virtdb.product.belongsTo(virtdb.brand, {foreignKey: 'fk_brandid', targetKey: 'uuid'});

module.exports = virtdb;

//module.exports = sequelize;
