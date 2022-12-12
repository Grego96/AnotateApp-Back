const express = require("express");
const routes = express.Router();
const careersController = require("../controllers/careerController");

routes.get("/careers", careersController.index);
routes.get("/careers/:id", careersController.show);
routes.post("/careers", careersController.store);
routes.patch("/careers/:id", careersController.edit);
routes.delete("/careers/:id", careersController.destroy);

module.exports = routes;
