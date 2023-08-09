const express = require ("express");
const router = express.Router();
const productControllers = require ("../controllers/productControllers");
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


// @GET - /products
router.get('/', productControllers.getList);

// @GET - /products/:id/detail -> /products/5/detail
router.get('/:id/detail', productControllers.getDetail);

// @GET - /products/create
router.get('/create', productControllers.getCreate);

// @POST - /products
router.post('/', upload.any('img'), productControllers.postProduct);

// @GET - /products/:id/edit
router.get('/:id/edit', productControllers.getEdit);

// @DELETE - /products/:id/delete
router.delete('/:id/delete', productControllers.deleteProduct);

router.put('/:id/edit', upload.any('img'), productControllers.updateProduct);

module.exports = router;