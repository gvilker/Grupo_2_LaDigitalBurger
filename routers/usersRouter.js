const express = require ("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body, check } = require('express-validator');

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

const registerValidations = [
    body('nombre_completo').notEmpty().withMessage('Escribe un nombre'),
    body('nombre_usuario').notEmpty().withMessage('Ingrese un alias'),
    body('correo_electronico')
        .notEmpty().withMessage('Escribe tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato correro válido'),
    body('contrasena')
        .notEmpty().withMessage('Debes proporcionar una contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe tenes al menos 8 caracteres'),
    body('confirmar_contrasena').notEmpty().withMessage('Repita su contraseña'),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
    
        if (!file) {
          throw new Error("Tienes que subir una imagen");
        } else {
          let fileExtension = path.extname(file.originalname);
          if (!acceptedExtensions.includes(fileExtension)) {
            throw new Error(
              `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
                ", "
              )}`
            );
          }
        }
        return true;
      }),
    ];

const loginValidator = [
    check('correo_electronico').isEmail().withMessage('Email invalido'),
    check('contrasena').isLength({min: 8}).withMessage('La contraseña debe tenes al menos 8 caracteres')
]

// Formulario de registro
router.get("/register", usersController.register);

// Procesar el registro
router.post("/register", uploadFile.single('avatar'), registerValidations,  usersController.processRegister);

// Formulario de login
router.get("/login", usersController.login);

// Procesar el login
router.post("/login", loginValidator, usersController.processLogin);

// Perfil de usuario
router.get('/profile/:userId', usersController.profile)

module.exports = router;