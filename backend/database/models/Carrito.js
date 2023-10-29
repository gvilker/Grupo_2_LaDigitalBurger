const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Carrito = sequelize.define("Carrito", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_Id: { // Cambiado de userId a user_Id
        type: DataTypes.UUID,
        allowNull: false,
      },
      product_Id: { // Cambiado de productId a product_Id
        type: DataTypes.INTEGER, 
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    }, {
      tableName: "carrito",
      timestamps: false,
    });
  
    Carrito.associate = function (models) {
      Carrito.belongsTo(models.User, {
        as: "usuario",
        foreignKey: "user_Id", // Cambiado de userId a user_Id
      });
      Carrito.belongsTo(models.Product, {
        as: "producto",
        foreignKey: "product_Id", // Cambiado de productId a product_Id
      });
    };
  
    return Carrito;
};