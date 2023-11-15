

const { check } = require('express-validator');

const productValidationRules = [
  check('name')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
  
  check('description')
    .notEmpty().withMessage('La descripción es obligatoria')
    .isLength({ min: 10, max: 500 }).withMessage('La descripción debe tener entre 10 y 500 caracteres'),

  check('price')
    .isFloat({ min: 0.01 }).withMessage('El precio debe ser mayor a 0'),

  check('calories')
    .isInt({ min: 0 }).withMessage('Las calorías deben ser un número entero positivo'),

  check('fat')
    .isFloat({ min: 0 }).withMessage('Las grasas deben ser un número positivo'),

  check('protein')
    .isFloat({ min: 0 }).withMessage('Las proteínas deben ser un número positivo'),

  check('carbohydrates')
    .isFloat({ min: 0 }).withMessage('Los carbohidratos deben ser un número positivo'),

  check('size')
    .isInt({ min: 1 }).withMessage('El tamaño debe ser un número entero positivo'),

  check('additional_ingredients')  
    .isLength({ max: 300 }).withMessage('Los ingredientes adicionales no deben exceder los 300 caracteres'),

  check('spicy')
    .isBoolean().withMessage('El nivel de picante debe ser verdadero o falso'),

  check('suggested_Acompaniments')  
    .isLength({ max: 300 }).withMessage('Las sugerencias de acompañamiento no deben exceder los 300 caracteres'),
    check("img").custom((value, { req }) => {
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

module.exports = {
  productValidationRules,
};
