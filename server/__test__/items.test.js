const request = require("supertest");
const { items } = require("../seedData");
const app = require("../app");
const { Item } = require("../models/Item");

describe("items test", () => {
  test("Get items should return all items", async () => {
    const allItems = await Item.findAll();
    const response = await request(app).get("/api/items").expect(200);
    expect(response.body[0].name).toEqual(allItems[0].name);
    expect(response.body[0].price).toEqual(allItems[0].price);
  });

  test("Get single Item By Id", async () => {
    const itemId = 1;
    const singleItem = await Item.findByPk(itemId);
    const response = await request(app).get(`/api/items/${itemId}`);
    expect(response.body.name).toEqual(singleItem.name);
    expect(response.body.price).toEqual(singleItem.price);
  });
});
