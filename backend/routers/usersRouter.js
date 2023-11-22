const express = require ("express");
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body, check } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const isAdminMiddleware = require('../middlewares/isAdminMiddleware');

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
    body('name').notEmpty().withMessage('Escribe un nombre'),
    body('alias').notEmpty().withMessage('Ingrese un alias'),
    body('email')
        .notEmpty().withMessage('Escribe tu correo electrónico').bail()
        .isEmail().withMessage('Debes escribir un formato correro válido'),
    body('password')
        .notEmpty().withMessage('Debes proporcionar una contraseña').bail()
        .isLength({min: 8}).withMessage('La contraseña debe tenes al menos 8 caracteres'),
    body('confirm_password').notEmpty().withMessage('Repita su contraseña'),
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
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tenes al menos 8 caracteres')
]

// Formulario de registro
router.get("/register", guestMiddleware, usersController.register);

// Procesar el registro
router.post("/register", uploadFile.single('avatar'), registerValidations,  usersController.processRegister);

// Formulario de login
router.get("/login", guestMiddleware, usersController.login);

// Procesar el login
router.post("/login", loginValidator, usersController.processLogin);

// Formulario de Recuperar contraseña
router.get("/passRecovery", usersController.passRecovery);

// Perfil de usuario
router.get('/profile', authMiddleware,  usersController.profile)

// Logout
router.get('/logout',  usersController.logout)

// @GET - /user/:id/edit -> para editar el perfil de usuario con permisos de usuario
router.get('/:id/edit',authMiddleware, usersController.getEditProfile);

// @UPDATE - /user/:id/edit como Usuario
router.put('/:id/edit',authMiddleware, usersController.updateProfileUser);

// @DELETE - /user/:id/delete como Usuario
router.delete('/:id/delete', authMiddleware, usersController.deleteProfile);



// Rutas únicamente como ADMINISTRADOR:

// @GET - /user -> Listado de todos los usuarios - Vista como Administrador
router.get('/', isAdminMiddleware,usersController.getList);

// @GET - /user/:id/detail -> detalle de usuario como Administrador
router.get('/admin/:id/detail', isAdminMiddleware, usersController.listDetail);

// @GET - /user/:id/edit -> para cambiar los permisos de usuario como Administrador
router.get('/admin/:id/edit', isAdminMiddleware, usersController.getEdit);

// @UPDATE - /user/:id/edit como Administrador
router.put('/admin/:id/edit', isAdminMiddleware, usersController.updateUser);

// @DELETE - /user/:id/delete como Administrador
router.delete('/admin/:id/delete', isAdminMiddleware, usersController.deleteUser);

// buscar usuarios como administrador
router.get('/admin/search', isAdminMiddleware, usersController.searchUsers);







module.exports = router;