const usersRoutes = require("./usersRoutes");
const courseRoutes = require("./courseRoutes");

module.exports = (app) => {
  app.use(usersRoutes);
  app.use(courseRoutes);
};
