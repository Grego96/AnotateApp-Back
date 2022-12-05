const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userControllers");

routes.get("/login", userController.login);
routes.post("/register", userController.register);

module.exports = routes;
