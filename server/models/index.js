const { Sequelize } = require("sequelize")
const { sequelize } = require("../db")
const { Item } = require("./Item")
const{User}=require("./User")

module.exports = {
	db: sequelize,
	Item,
	User
}
