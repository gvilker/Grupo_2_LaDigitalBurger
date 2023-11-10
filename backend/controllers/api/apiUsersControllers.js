const db = require('../../database/models');
const { Op } = require('sequelize');

module.exports = {
  getList: async (req, res) => {
    try {
      let statusCode = 200;
      const usuarios = await db.User.findAll({
        attributes: { exclude: ['password'] },
      });

      usuarios.forEach((usuario) => {
        usuario.avatar = `/images/avatars/${usuario.avatar}`;
      });

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
  profile: async (req, res) => {
    try {
      const user = await db.User.findByPk(req.params.id, {
        attributes: { exclude: ['password'] },
      });
  
      if (!user) {
        // Si el usuario no se encontró, responde con un estado 404 (No encontrado).
        return res.status(404).json({ error: 'Usuario no encontrado', code: '404' });
      }
  
      // Actualizar la URL del avatar
      user.avatar = `/images/avatars/${user.avatar}`;
  
      // Puedes establecer el estado a 200 (OK) ya que se encontró el usuario.
      const statusCode = 200;
  
      const response = {
        data: user,
        meta: {
          status: statusCode,
          path: req.baseUrl,
          query: req.query,
        },
      };
  
      res.status(statusCode).json(response);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error del servidor', code: '500' });
    }
  }
}