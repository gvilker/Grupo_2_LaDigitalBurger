const { check } = require ('express-validator');

let validatedProduct = [ 
    
    // probar si el notEmpty es necesario, ya que en la vista ponemos required.
        check('nombre').notEmpty().isAlpha(),
        check('descripcion').notEmpty().isAlpha(),
        check('precio').notEmpty().isNumeric(),
        check('img').notEmpty(),
        check('calorias').notEmpty().isNumeric(),
        check('grasas').notEmpty().isNumeric(),
        check('proteinas').notEmpty().isNumeric(),
        check('carbohidratos').notEmpty().isNumeric(),
        check('tamano').notEmpty().isNumeric(),
        check('ingredientesAdicionales').notEmpty().isAlpha(),


        check('descripcion').isLength({ min: 6 })
        ]
