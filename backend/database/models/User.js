const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => { 
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    alias: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    user_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: false,
  });

  User.associate = function(models) {
    User.belongsTo(models.UserType, {
      as: 'tipoUsuario',
      foreignKey: 'user_type'
    });

    User.hasMany(models.Carrito, {
      as: "carritos",
      foreignKey: "user_Id",
    });
  };

  return User;
}