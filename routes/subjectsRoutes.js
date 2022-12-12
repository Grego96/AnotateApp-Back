const express = require("express");
const routes = express.Router();
const subjectController = require("../controllers/subjectController");

routes.get("/subjects", subjectController.index);
routes.get("/subjects/:id", subjectController.show);
routes.post("/subjects", subjectController.store);
routes.patch("/subjects/:id", subjectController.edit);
routes.delete("/subjects/:id", subjectController.destroy);

module.exports = routes;
