'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sugar = sequelize.define('Sugar', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    result: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 60,
        max: 300 
      }
    }
  }, {});
  Sugar.associate = function (models) {
    // associations can be defined here
    Sugar.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Sugar;
};