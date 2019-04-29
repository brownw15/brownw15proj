const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');

const Brand = sequelize.define('brand', {
	uuid : {
		type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV1,
		primaryKey: true,
		allowNull: false
	},
	name : {
		type: Sequelize.STRING,
		allowNull: false
	},
	 brandlogo : {
		type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Brand;
