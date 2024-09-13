"use strict";
const table = "students";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(table, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      gender: {
        type: Sequelize.ENUM("Boy", "Girl"),
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable(table);
  },
};
