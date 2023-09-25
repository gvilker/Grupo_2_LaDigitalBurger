const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => { 
  const Product = sequelize.define('Product',  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(20, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fat: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    protein: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    carbohydrates: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    spicy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    additional_ingredients: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    suggested_Acompaniments: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    additional_Information: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  }, {
    tableName: 'products',
    timestamps: false,
  });

  Product.associate = function (models) {   
    Product.hasMany(models.Carrito, {
      as: "carritos",
      foreignKey: "product_Id",
    });
  };
  return Product;
}