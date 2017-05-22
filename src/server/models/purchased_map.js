'use strict';

module.exports = (sequelize, DataTypes) => {
  var purchased_map = sequelize.define('purchased_map', {
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city_map_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return purchased_map;
};