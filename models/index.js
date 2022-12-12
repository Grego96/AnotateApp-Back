const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  }
);

const User = require("./User")(sequelize, Model, DataTypes);
const Career = require("./Career")(sequelize, Model, DataTypes);
const Subject = require("./Subject")(sequelize, Model, DataTypes);
const Event = require("./Event")(sequelize, Model, DataTypes);

User.hasMany(Career);
Career.belongsTo(User);

Career.hasMany(Subject);
Subject.belongsTo(Career);

Career.hasMany(Event);
Event.belongsTo(Career);

module.exports = { sequelize, User, Career, Subject, Event };
