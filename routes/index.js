const usersRoutes = require("./usersRoutes");
const carrersRoutes = require("./careersRoutes");

module.exports = (app) => {
  app.use(usersRoutes);
  app.use(carrersRoutes);
};
