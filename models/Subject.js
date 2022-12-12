module.exports = (sequelize, Model, DataTypes) => {
  class Subject extends Model {}

  Subject.init(
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
      days: {
        type: DataTypes.ENUM(
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      schedule: {
        type: DataTypes.TIME,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
        defaultValue: DataTypes.NOW,
      },
      type: {
        type: DataTypes.ENUM("Practical", "Theoretical"),
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "subject",
    }
  );

  return Subject;
};
