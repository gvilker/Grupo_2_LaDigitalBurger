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
    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/')
    }
}



module.exports = controller;