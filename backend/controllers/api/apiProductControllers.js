const db = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
  getList: async (req,res) => {
    try {
        let statusCode = 200;
        const productos = await db.Product.findAll();

        statusCode = productos.length > 0 ? statusCode : 204;

        const response = {
            data: productos,
            meta: {
                status: statusCode,
                path: req.baseUrl,
                quantity: productos.length,
                query: req.query
            }
        }

        res.status(statusCode).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error', code: '500'});
    } 
  },
  getDetail: async (req,res) => {
    try {
        let statusCode = 200;
        const producto = await db.Product.findByPk(req.params.id);

        statusCode = producto ? statusCode : 204;

        const response = {
            data: producto,
            meta: {
                status: statusCode,
                path: req.baseUrl,                
                query: req.query
            }
        }

        res.status(statusCode).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Server error', code: '500'});
    } 
  },
}
