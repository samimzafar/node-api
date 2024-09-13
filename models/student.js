("use strict");
const moment = require("moment");
const { Op } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define(
    "students",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      gender: {
        type: DataTypes.ENUM("Boy", "Girl"),
        allowNull: true,
      },
      profile_pic: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      coins: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      last_poll: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_institute_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fk_grade_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fcm_token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      archived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      defaultScope: {
        where: {
          archived: false,
          name: { [Op.ne]: null },
        },
      },
    }
  );
  Student.beforeCreate((student) => {
    student.dataValues.createdAt = moment().unix();
    student.dataValues.updatedAt = moment().unix();
  });

  Student.beforeUpdate((student) => {
    student.dataValues.updatedAt = moment().unix();
  });
  return Student;
};
