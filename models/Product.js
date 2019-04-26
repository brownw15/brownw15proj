const Sequelize = require('sequelize');
const sequelize = require('../utils/sequelize');

const Product = sequelize.define('product', {
	id : {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false
	},
	itemName : {
		type: Sequelize.STRING,
		allowNull: false
	},
	 itemDesc : {
		type: Sequelize.STRING,
    allowNull: false
  },
	itemImg : {
		type: Sequelize.STRING,
		allowNull: true
	},
	itemPrc : {
		type: Sequelize.DECIMAL(10,2),
		allowNull: false
	}
});

module.exports = Product;
