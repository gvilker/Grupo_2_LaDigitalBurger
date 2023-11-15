const db = require('../../database/models');
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');

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
        return res.status(404).json({ error: 'Usuario no encontrado', code: '404' });
      }  

      user.avatar = `/images/avatars/${user.avatar}`;  
 
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
  },
  processLogin: async (req, res) => {  
    const { email, password } = req.body;  
    try {
      let userToLogin = await db.User.findOne({ where: { email } });
  
      if (!userToLogin) {
        return res.status(400).json({ error: 'Credenciales inválidas' });
      }  
      let passwordMatch = await bcrypt.compare(password, userToLogin.password);  
      if (!passwordMatch) {
        return res.status(400).json({ error: 'Credenciales inválidas' });
      }
  
      const avatarPath = '/images/avatars/' + userToLogin.avatar;
  
      req.session.userLogged = userToLogin;
      req.session.userType = userToLogin.user_type;
      req.session.userLogged.avatar = avatarPath;  

      const responseData = {
        userId: userToLogin.id,
        userName: userToLogin.name,
        userType: userToLogin.user_type,
        avatarPath: avatarPath,
      };
      console.log(responseData);
  
      return res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error en el inicio de sesión. Inténtalo de nuevo más tarde.' });
    }
  },
}