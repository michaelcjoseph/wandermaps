'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('purchased_maps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING
      },
      city_map_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_id: {
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        type: Sequelize.INTEGER
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('purchased_maps');
  }
};
