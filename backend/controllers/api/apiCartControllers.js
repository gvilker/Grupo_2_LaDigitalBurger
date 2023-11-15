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
  