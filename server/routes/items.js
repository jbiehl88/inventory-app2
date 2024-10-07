const express = require("express")
const itemRouter = express.itemRouter()
const { Item } = require("../models")

// GET /items
itemRouter.get("/", async (req, res, next) => {
	try {
		const items = await Item.findAll()
		res.send(items)
	} catch (error) {
		next(error)
	}
})

module.exports = itemRouter
