const express = require("express")
const itemRouter = express.Router()
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

//GET one item
itemRouter.get("/:id", async (req, res) => {
    try{
        const oneItem = await Item.findByPk(req.params.id)
        res.json(oneItem);
    } catch (error) {
        console.error
        next(error)
    }
})

//Create item to inventory
itemRouter.post('/', async (req, res, next) => {
	try {
		const items = await Item.create(req.body);
		res.send(items);
	} catch (error) {
		next(error);
	}
});

//delete/an Item from the inventory
itemRouter.delete("/:id", async (req, res, next) => {
  try {
    const itemId = req.params.id;
    const findItem = await Item.findByPk(itemId);
    await findItem.destroy();
    const allItems = await User.findAll();
    res.json(allItems);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = itemRouter;

