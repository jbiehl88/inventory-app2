const express = require("express")
const searchRouter = express.Router();
//a way to use SQL-like operators in Sequelize queries.
const { Op } = require('sequelize');
const { Item } = require("../models");

searchRouter.get("/:name", async (req, res) => {
    try {
        //instead of using where? because we want to grab what is passed in?
        const theName = await Item.findAll(req.params.name);
        res.json(theName)

    } catch (error) {
		console.error
		next(error)
	}
})

