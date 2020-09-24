'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pressure = sequelize.define('Pressure', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    systolic_pressure: {
      type: DataTypes.INTEGER,
      validate: {
        min: 60,
        max: 300 
      }
    },
    diastolic_pressure: DataTypes.INTEGER
  }, {});
  Pressure.associate = function (models) {
    // associations can be defined here
    Pressure.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Pressure;
};