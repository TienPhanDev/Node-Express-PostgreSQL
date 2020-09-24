'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    age: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true,
        isInt: true,
        min: 18 
      }
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Sugar, { foreignKey: 'userId' });
    User.hasMany(models.Pressure, { foreignKey: 'userId' });
  };
  return User;
};