const express = require ("express");
const router = express.Router();


const path = require('path');
const multer = require('multer');

const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/avatars');
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null, fileName);
    }    
})

const uploadFile = multer({ storage });


const usersController = require ("../controllers/usersControllers");

const validations = [
    body('nombre_completo').notEmpty().withMessage('Escribe un nombre'),
    body('nombre_usuario').notEmpty().withMessage('Ingrese un alias'),
    body('correo_electronico')
        .notEmpty().withMessage('Escribe tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato correro válido'),
    body('contrasena').notEmpty().withMessage('Debes proporcionar una contraseña'),
    body('confirmar_contrasena').notEmpty().withMessage('Repita su contraseña'),
    body('avatar').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.jpeg', '.gif']

        if (!file){
            throw new Error('Tienes que subir una imagen')
        } else{
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
        }       
    }
        return true;
    })
]

// Formulario de registro
router.get("/register", usersController.register);

// Procesar el registro
router.post("/register", uploadFile.single('avatar'), validations,  usersController.processRegister);

// Formulario de login
router.get("/login", usersController.login);

// Perfil de usuario
router.get('/profile/:userId', usersController.profile)

module.exports = router;