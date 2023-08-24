const path = require ("path");
const fs = require('fs');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModels');
const { validationResult } = require('express-validator');
const { error } = require("console");


const controller = {
    login: (req, res) => {
        res.render("login");
    }, 
    processLogin: (req, res) => {
        let userToLogin = userModel.findByFields('correo_electronico', req.body.correo_electronico);
        
        if(userToLogin) {
            let isOkThePassword = bcrypt.compareSync(req.body.contrasena, userToLogin.contrasena);
            if (isOkThePassword) {
                delete userToLogin.contrasena; 
                req.session.userLogged = userToLogin
                return res.redirect('/user/profile');
    }

    return res.render('login', {
        errors: {
            correo_electronico: {
                msg: 'Las credenciales son incorrectas'
            }
        }
    });
    }
    },
    /*processLogin: (req, res) => {
        let errors = validationResult(req);
    
        if (errors.isEmpty()) { 
            const users = userModel.findAll();
    
            let userToLogin;
    
            for (let i = 0; i < users.length; i++) {
                if (users[i].correo_electronico == req.body.correo_electronico){
                    if (bcrypt.compareSync(req.body.contrasena, users[i].contrasena)){
                        userToLogin = users[i];
                        break;
                    }
                }
            }
    
            if (userToLogin) {
                req.session.UserLoggedIn = userToLogin;

                if (req.body.recordame != undefined) {
                    res.cookie('recordame', userToLogin.correo_electronico, { maxAge: 1000 *60 *60 *24 *365})
                }

                return res.send('Inicio de sesión exitoso'); 
            } else {
                return res.render('login', {errors: [
                    {msg: 'Credenciales inválidas'}
                ]});
            }
        } else {
            return res.render('login', {errors: errors.array()});
        }
    },*/

    register: (req, res) => {
        res.render("register");
    },
    processRegister: (req, res) => {
        let resultValidation = validationResult(req);
      
        if (resultValidation.errors.length > 0) {
          return res.render("register", {
            errors: resultValidation.mapped(),
            oldData: req.body,
          });
        }
        let userInDB = userModel.findByFields('correo_electronico', req.body.correo_electronico);

        if (userInDB){
            return res.render("register", {
                errors: { 
                    correo_electronico:  { 
                        msg: 'El Email proporcionado corresponde a un usuario registrado'
                    }
                },
                oldData: req.body,
              });
        }

        const { confirmar_contrasena, ...userDataWithoutConfirm } = req.body;

        let imageName = req.file.filename;
        let newUser = userModel.createUser(userDataWithoutConfirm, imageName);
        return res.redirect('login');
        /*res.render("profile", { user: newUser });*/
        /*return res.send('las validaciones se pasaron correctamente')*/
    },
    profile: (req, res) => {
        return res.render('profile', {
            user: req.session.userLogged
        });
    },
    editProfile: (req, res) => {
        return res.render('editProfile', {
            users: req.session.userLogged
        });
    },
    
    processEditProfile : async (req, res) => {
        const resultValidation = validationResult(req);
      
        if (resultValidation.errors.length > 0) {
          return res.render("editProfile", {
            errors: resultValidation.mapped(),
            oldData: req.body,
          });
        }
      
        try {
          // Obtén el usuario actualmente logueado desde la sesión
          const userToUpdate = req.session.userLogged;
      
          // Actualiza los campos del usuario con los nuevos valores
          userToUpdate.nombre_completo = req.body.nombre_completo;
          userToUpdate.nombre_usuario = req.body.nombre_usuario;
          userToUpdate.correo_electronico = req.body.correo_electronico;
      
          // Verifica si se proporcionó una nueva contraseña
          if (req.body.nueva_contrasena && req.body.confirmar_nueva_contrasena) {
            if (req.body.nueva_contrasena === req.body.confirmar_nueva_contrasena) {
              // Hasheamos y actualizamos la nueva contraseña
              const saltRounds = 10;
              const hashedPassword = bcrypt.hashSync(req.body.nueva_contrasena, saltRounds);
              userToUpdate.contrasena = hashedPassword;
            } else {
              return res.render('editProfile', {
                errors: {
                  confirmar_nueva_contrasena: {
                    msg: 'Las contraseñas no coinciden'
                  }
                },
                oldData: req.body,
              });
            }
          }
      
          if (req.file && req.file.filename) {
            // Si se subió una nueva imagen, actualiza la ruta de la imagen
            userToUpdate.avatar = `/images/avatars/${req.file.filename}`;
          
            // Luego, actualiza el usuario en el archivo JSON y en la sesión
            userModel.updateUser(userToUpdate);
            req.session.userLogged = userToUpdate;
          } else {
            // Si no se subió una nueva imagen, no es necesario actualizar la imagen en el archivo JSON
          }
      
          // Redireccionar a la página de perfil actualizado o mostrar un mensaje de éxito
          res.redirect('/user/profile');
        } catch (error) {
          // Manejar cualquier error que ocurra durante el proceso
          console.error(error);
          res.redirect('/user/editProfile'); // Redirigir de nuevo al formulario de edición con un mensaje de error
        }
},
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}



module.exports = controller;