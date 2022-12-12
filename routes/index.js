const usersRoutes = require("./usersRoutes");
const carrersRoutes = require("./careersRoutes");
const subjectController = require("./subjectsRoutes");

module.exports = (app) => {
  app.use(usersRoutes);
  app.use(carrersRoutes);
  app.use(subjectController);
};
