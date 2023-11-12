const db = require('../../database/models');

module.exports = {
  carrito: async (req, res) => {
    try {
      let statusCode = 200;
      const carritos = await db.Carrito.findAll();

      statusCode = carritos.length > 0 ? statusCode : 204;

      const response = {
        data: carritos,
        meta: {
            status: statusCode,
            path: req.baseUrl,
            quantity: carritos.length,
            query: req.query
        }
      }
      res.status(statusCode).json(response);
      } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error', code: '500'});
      }
    }
    }
  
  /*,

  addToCart: async (req, res) => {
    try {
      const { productId, quantity } = req.body;
      const product_Id = parseInt(productId);
      const product = await db.Product.findByPk(product_Id);
  
      if (!product) {
        return res.status(404).send("Producto no encontrado");
      }
  
      if (req.session.userLogged) {
        const user_Id = req.session.userLogged.id;
  
        await db.Carrito.create({
          product_Id: product.id,
          quantity: parseInt(quantity),
          user_Id: user_Id, 
        });
  
        res.redirect("/cart/carrito");
      } else {
        res.status(403).send("No autorizado");
      }
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
      res.status(500).send("Error al agregar producto al carrito");
    }
  },
  removeFromCart: async (req, res) => {
    try {
      const { product_Id } = req.params;
      let user_Id = null;
  
      if (req.session.userLogged) {
        user_Id = req.session.userLogged.id;
      }
  
      const carritoItem = await db.Carrito.findOne({
        where: {
          product_Id,
          user_Id,
        },
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
  },*/
