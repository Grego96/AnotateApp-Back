module.exports = (sequelize, Model, DataTypes) => {
  class Event extends Model {}

  Event.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "event",
    }
  );

  return Event;
};
