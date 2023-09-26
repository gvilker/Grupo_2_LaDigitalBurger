const express = require ("express");
const router = express.Router();
const productControllers = require ("../../controllers/api/apiProductControllers");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/products');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });


// @GET - /api/products
router.get('/', productControllers.getList);

/*
// @GET - /products/:id/detail -> /products/5/detail
router.get('/:id/detail', productControllers.getDetail);

// @GET - /products/create  como Administrador
router.get('/create',isAdminMiddleware, productControllers.getCreate);

// @POST - /products como Administrador
router.post('/', upload.any('img'), isAdminMiddleware, productValidationRules ,productControllers.postProduct);

// @GET - /products/:id/edit como Administrador
router.get('/:id/edit', isAdminMiddleware, productControllers.getEdit);

// @DELETE - /products/:id/delete  como Administrador
router.delete('/:id/delete',isAdminMiddleware, productControllers.deleteProduct);

// @UPDATE - /products/:id/edit  como Administrador
router.put('/:id/edit',isAdminMiddleware, upload.any('img'), productValidationRules ,productControllers.updateProduct);

// buscar productos
router.get('/search', productControllers.searchProducts);
*/
module.exports = router;
