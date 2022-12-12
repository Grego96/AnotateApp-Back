const express = require("express");
const routes = express.Router();
const eventController = require("../controllers/eventController");

routes.get("/events", eventController.index);
routes.get("/events/:id", eventController.show);
routes.post("/events", eventController.store);
routes.patch("/events/:id", eventController.edit);
routes.delete("/events/:id", eventController.destroy);

module.exports = routes;
