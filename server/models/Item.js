const { Sequelize } = require("sequelize")
const { sequelize } = require("../db")

const Item = sequelize.define("Items", {
	name: Sequelize.STRING,
	description: Sequelize.TEXT, 
	price: Sequelize.FLOAT,
	category: Sequelize.STRING,
	image: Sequelize.STRING,
})

module.exports = {
	db: sequelize,
	Item,
}
