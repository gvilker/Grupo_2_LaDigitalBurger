

const { check } = require('express-validator');

const productValidationRules = [
  check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ min: 3, max: 50 }).withMessage('El nombre debe tener entre 3 y 50 caracteres'),
  
  check('descripcion')
    .notEmpty().withMessage('La descripción es obligatoria')
    .isLength({ min: 10, max: 500 }).withMessage('La descripción debe tener entre 10 y 500 caracteres'),

  check('precio')
    .isFloat({ min: 0.01 }).withMessage('El precio debe ser mayor a 0'),

  check('calorias')
    .isInt({ min: 0 }).withMessage('Las calorías deben ser un número entero positivo'),

  check('grasas')
    .isFloat({ min: 0 }).withMessage('Las grasas deben ser un número positivo'),

  check('proteinas')
    .isFloat({ min: 0 }).withMessage('Las proteínas deben ser un número positivo'),

  check('carbohidratos')
    .isFloat({ min: 0 }).withMessage('Los carbohidratos deben ser un número positivo'),

  check('tamano')
    .isInt({ min: 1 }).withMessage('El tamaño debe ser un número entero positivo'),

  check('ingredientesAdicionales')
    //.notEmpty().withMessage('Debes proporcionar ingredientes adicionales')
    .isLength({ max: 300 }).withMessage('Los ingredientes adicionales no deben exceder los 300 caracteres'),

  check('picante')
    .isBoolean().withMessage('El nivel de picante debe ser verdadero o falso'),

  check('sugerenciasAcompanamiento')
    //.notEmpty().withMessage('Debes proporcionar sugerencias de acompañamiento')
    .isLength({ max: 300 }).withMessage('Las sugerencias de acompañamiento no deben exceder los 300 caracteres'),
];

module.exports = {
  productValidationRules,
};
