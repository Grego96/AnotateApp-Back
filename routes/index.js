const usersRoutes = require("./usersRoutes");
const carrersRoutes = require("./careersRoutes");
const subjectController = require("./subjectsRoutes");
const eventController = require("./eventsRoutes");

module.exports = (app) => {
  app.use(usersRoutes);
  app.use(carrersRoutes);
  app.use(subjectController);
  app.use(eventController);
};
