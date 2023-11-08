const db = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
  getList: async (req,res) => {
    try {
        let statusCode = 200;
        const usuarios = await db.User.findAll();

        statusCode = usuarios.length > 0 ? statusCode : 204;

        const response = {
            data: usuarios,
            meta: {
                status: statusCode,
                path: req.baseUrl,
                quantity: usuarios.length,
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