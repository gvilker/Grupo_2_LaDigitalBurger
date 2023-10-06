const User = require('../database/models/User');
const db = require('../database/models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const userController = {
  register: (req, res) => {
    res.render('register');
  },

  processRegister: async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.render('register', { errors: errors.array() });
    }

    const { name, alias, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
      return res.render('register', { error: 'Las contraseñas no coinciden.' });
    }

    try {
      const existingUser = await db.User.findOne({ where: { email } });
      if (existingUser) {
        return res.render('register', { error: 'El correo electrónico ya está en uso.' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      let avatar = null;

      if (req.file) {    
        avatar = req.file.filename;
      }

      const newUser = await db.User.create({
        name,
        alias,
        email,
        password: hashedPassword,
        user_type: 1,
        avatar, 
      });

      
      res.redirect('/user/login');
    } catch (error) {
      console.error(error);
      res.render('register', { error: 'Error en el registro. Inténtalo de nuevo más tarde.' });
    }
  },

  login: (req, res) => {
    res.render('login');
  },
  getEditProfile: async (req, res) => {
    try {
        const user = await db.User.findByPk(req.params.id);

        res.render('editProfile', { user });
    } catch (error) {
        res.send(error)
    }        
},
updateProfileUser: async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    const isPasswordValid = await bcrypt.compare(req.body.currentPassword, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('La contraseña actual es incorrecta');
    }

    if (req.body.newPassword !== req.body.confirmNewPassword) {
      return res.status(400).send('La nueva contraseña y la confirmación no coinciden');
    }

    user.name = req.body.name;
    user.alias = req.body.alias;
    user.email = req.body.email;
    user.avatar = req.body.avatar;
    user.user_type = 1;

    if (req.body.newPassword) {

      const hashedPassword = await bcrypt.hash(req.body.newPassword, 10); 
      user.password = hashedPassword;
    }

    await user.save();

    req.session.destroy(() => {
      res.redirect('/user/login');
    });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).send('Error al actualizar el usuario');
  }
},
deleteProfile: async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }  
    await user.destroy();
    req.session.destroy(() => {
      res.redirect('/');
    });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).send('Error al eliminar el usuario');
  }
},
  processLogin: async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.render('login', { errors: errors.array() });
    }
  
    const { email, password } = req.body;
  
    try {
     
      let userToLogin = await db.User.findOne({ where: { email } });
  
      if (!userToLogin) {
        return res.render('login', { error: 'Credenciales inválidas' });
      }
  
   
      let passwordMatch = await bcrypt.compare(password, userToLogin.password);
  
      if (!passwordMatch) {
        return res.render('login', { error: 'Credenciales inválidas' });
      }  

      const avatarPath = '/images/avatars/' + userToLogin.avatar;
     
      req.session.userLogged = userToLogin
      req.session.userType = userToLogin.user_type;
      req.session.userLogged.avatar = avatarPath;  

   console.log(req.session)

      return res.redirect('/user/profile');
    } catch (error) {
      console.error(error);
      res.render('login', { error: 'Error en el inicio de sesión. Inténtalo de nuevo más tarde.' });
    }
  },

  profile: async (req, res) => {
    try {
  
      const user = await db.User.findByPk(req.session.userId);

      if (!user) {
        return res.render('profile', { error: 'Usuario no encontrado' });
      }

      res.render('profile', { user });
    } catch (error) {
      console.error(error);
      res.render('profile', { error: 'Error al cargar el perfil del usuario' });
    }
  },

  logout: (req, res) => {
 
    req.session.destroy(() => {
      res.redirect('/');
    });
  },
  getList: async (req,res) => {
    try {
      let users = await db.User.findAll()
     
        res.render('userList', { users });
    } catch (error) {
      console.error(error);
      res.render('userList', { error: 'Error al cargar los usuarios' });
    }
  },
  listDetail: function (req,res) {
    db.User.findByPk(req.params.id)
    .then(function(user){
      if(user){
        res.render('userDetail', { user: user });
      } else {
        res.send('Usuario no encontrado');
      }
    })
  },
  getEdit: async (req, res) => {
    try {
        const user = await db.User.findByPk(req.params.id);

        res.render('editUser', { user });
    } catch (error) {
        res.send(error)
    }        
},
updateUser: async (req, res) => {

  try {
    const user = await db.User.findByPk(req.params.id);  
    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }  
   
    await user.update({
      user_type: req.body.user_type,      
      
    });
    console.log(req.body.user_type)
    res.redirect('/user/admin/' + user.id + '/detail');
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).send('Error al actualizar el usuario');
  }
},
deleteUser: async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }  
    await user.destroy();

    res.redirect('/user'); 
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).send('Error al eliminar el usuario');
  }
},
searchUsers: async (req, res) => {
  try {
    const query = req.query.query;
    const criteria = req.query.criteria;

    let users;

    if (criteria === 'id') {
      
      users = await db.User.findAll({
        where: {
          id: query
        }
      });
    } else {
     
      users = await db.User.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${query}%`
              }
            },
            {
              alias: {
                [Op.like]: `%${query}%`
              }
            },
            {
              email: {
                [Op.like]: `%${query}%`
              }
            }
          ]
        }
      });
    }

    res.render('userList', { users });
  } catch (error) {
    console.error('Error al buscar usuarios:', error);
    res.status(500).send('Error al buscar usuarios');
  }
},
};

module.exports = userController;