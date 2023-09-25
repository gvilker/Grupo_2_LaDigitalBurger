const path = require("path");
const db = require('../database/models');
const { Carrito, Product } = require("../database/models");

const controller = {
  carrito: async (req, res) => {
    try {
   
      const carritoItems = await db.Carrito.findAll({
        include: [{ model: db.Product, as: 'producto' }], 
      });  
    
      let totalPrice = 0;
      carritoItems.forEach((item) => {
        totalPrice += item.producto.price; 
      });
  
      res.render("carrito", { carrito: carritoItems, totalPrice });
    } catch (error) {
      console.error("Error al obtener el carrito:", error);
      res.status(500).send("Error al obtener el carrito");
    }
  },

  addToCart: async (req, res) => {
    try {
      const { productId, quantity } = req.body;  
    
      const product_Id = parseInt(productId); 
   
      const product = await db.Product.findByPk(product_Id);
  
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }  
   
      if (req.session.userLogged) {
        user_Id = req.session.userLogged.id;
      }
  console.log(user_Id)
     
      await db.Carrito.create({
        product_Id: product.id,
        quantity: parseInt(quantity),
        user_Id: req.session.userLogged.id,
      });
  
      res.redirect("/cart/carrito"); 
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
      res.status(500).send("Error al agregar producto al carrito");
    }
  },
  removeFromCart: async (req, res) => {
    try {
        const { product_Id } = req.params; 
        console.log(product_Id);
       
        let user_Id = null;
        if (req.session.userLogged) {
            user_Id = req.session.userLogged.id;
        }      
        const carritoItem = await db.Carrito.findOne({
          where: {
            product_Id: product_Id,
              user_Id: user_Id
          }
      });
        if (!carritoItem) {
            return res.status(404).send("Elemento del carrito no encontrado");
        }
        await carritoItem.destroy();
        res.redirect("/cart/carrito"); 
    } catch (error) {
        console.error("Error al eliminar producto del carrito:", error);
        res.status(500).send("Error al eliminar producto del carrito");
    }
},
}

module.exports = controller;