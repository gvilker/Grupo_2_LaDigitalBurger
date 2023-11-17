const db = require('../../database/models');

module.exports = {
    contacto: async (req, res) => {
      try {
        let statusCode = 200;
        const contactos = await db.Contact.findAll();
  
        statusCode = contactos.length > 0 ? statusCode : 204;
  
        const response = {
          data: contactos,
          meta: {
              status: statusCode,
              path: req.baseUrl,
              quantity: contactos.length,
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