const path = require ("path");
const fs = require('fs');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModels');
const { validationResult } = require('express-validator')

const controller = {
    login: (req, res) => {
        res.render("login");
    }, 
    processLogin: (req, res) => {
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
    },

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
        const { confirmar_contrasena, ...userDataWithoutConfirm } = req.body;

        let imageName = req.file.filename;
        let newUser = userModel.createUser(userDataWithoutConfirm, imageName); 
        res.render("profile", { user: newUser });
        /*return res.send('las validaciones se pasaron correctamente')*/
    },
    profile: (req, res) => {
        const userId = req.params.userId;
        const user = userModel.findByPk(userId);
    
        if (!user) {          
          return res.status(404).send('Usuario no encontrado');
        }
        res.render('profile', { user });
    }
}



module.exports = controller;