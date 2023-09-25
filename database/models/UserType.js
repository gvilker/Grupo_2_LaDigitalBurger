const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => { 
  const UserType = sequelize.define('UserType', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  }, {
    tableName: 'usertype',
    timestamps: false,
  });

  UserType.associate = function(models) {
    UserType.hasMany(models.User, {
      as: 'usuarios',
      foreignKey: 'user_type'
    });
  };

  return UserType;
}