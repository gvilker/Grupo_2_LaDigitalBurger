const path = require ("path");
const { validationResult } = require('express-validator')

const controller = {
    login: (req, res) => {
        res.render("login");
    },
    register: (req, res) => {
        res.render("register");
    },
    processRegister: (req,res) => {
        let resultValidation = validationResult(req);   

        if (resultValidation.errors.length > 0) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        return res.send('las validaciones se pasaron correctamente')
    },
    profile: (req, res) => {
        res.render("userProfile")
    }
}

module.exports = controller;