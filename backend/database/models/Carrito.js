const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Carrito = sequelize.define("Carrito", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_Id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
  }, {
    tableName: "carrito",
    timestamps: true,
    createdAt: 'created_at', 
    updatedAt: 'updated_at', 
  });

  Carrito.associate = function (models) {
    Carrito.belongsTo(models.User, {
      as: "usuario",
      foreignKey: "user_Id",
    });
    Carrito.belongsTo(models.Product, {
      as: "producto",
      foreignKey: "product_Id",
    });
  };
 
  Carrito.beforeCreate((carrito, options) => {
    calculateTotalPrice(carrito);
  });

  Carrito.beforeUpdate((carrito, options) => {
    calculateTotalPrice(carrito);
  });

  function calculateTotalPrice(carrito) {
    if (carrito.quantity && carrito.producto && carrito.product_Id.price) {
      carrito.totalPrice = carrito.quantity * carrito.product_Id.price;
    }
  }
  return Carrito;
};