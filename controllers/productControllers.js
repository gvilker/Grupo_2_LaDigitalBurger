const path = require ("path");
const productModel = require('../models/productModels');
const fs = require("fs");

const controller = {
  getList: (req, res) => {
      
      const products = productModel.findAll();

      res.render('productList', { products: products });
    },
  getDetail: (req, res) => {

    const productId = req.params.id;
    const selectedProduct = productModel.findById(productId);

    if (!selectedProduct) {
        return res.send('Producto no encontrado');
    }
    res.render('productDetail', { product: selectedProduct });
  },

  getCreate: (req, res) => {
    const products = productModel.findAll();
    const product = null;
    res.render('createProduct', { products: products, product: product });
  },


    postProduct: (req, res) => {
      const filenames = req.files.map(file => file.filename);
      console.log(filenames)

      const imagePath = '/images/products/' + filenames[0];
  
      const newProduct = {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: parseFloat(req.body.precio),
        imagen: imagePath,
        calorias: parseInt(req.body.calorias),
        grasas: parseFloat(req.body.grasas),
        proteinas: parseFloat(req.body.proteinas),
        carbohidratos: parseFloat(req.body.carbohidratos),
        tamano: parseInt(req.body.tamano),
        ingredientesAdicionales: req.body.ingredientesAdicionales.split(',').map(ingrediente => ingrediente.trim()),
        picante: req.body.picante === 'true', 
        sugerenciasAcompanamiento: req.body.sugerenciasAcompanamiento.split(',').map(sugerencia => sugerencia.trim()),
        informacionAdicional: req.body.informacionAdicional,
      }
  
      const createdProduct = productModel.createProduct(newProduct);
  
      res.redirect('/products/' + createdProduct.id + '/detail');
    },
    getEdit: (req, res) => {
      const product = productModel.findById(Number(req.params.id));

      res.render('editProduct', { product });
  },

  deleteProduct: (req, res) => {
      productModel.destroy(Number(req.params.id));

      res.redirect('/products');
  },

  updateProduct: (req, res) => {
    const product = productModel.findById(Number(req.params.id));
    const filenames = req.files && req.files.length > 0 ? req.files.map(file => file.filename) : [];
    console.log(filenames);
    
    let imagePath = req.files && req.files.length > 0
    ? path.join('/images/products/', req.files[0].filename)
    : product.imagen;
    
    let updatedProduct = {
      id: Number(req.params.id),
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: parseFloat(req.body.precio),
      imagen: imagePath,
      calorias: parseInt(req.body.calorias),
      grasas: parseFloat(req.body.grasas),
      proteinas: parseFloat(req.body.proteinas),
      carbohidratos: parseFloat(req.body.carbohidratos),
      tamano: parseInt(req.body.tamano),
      ingredientesAdicionales: req.body.ingredientesAdicionales
      ? req.body.ingredientesAdicionales.split(',').map(ingrediente => ingrediente.trim())
      : [],
      picante: req.body.picante === 'true', 
      sugerenciasAcompanamiento: req.body.sugerenciasAcompanamiento
      ? req.body.sugerenciasAcompanamiento.split(',').map(sugerencia => sugerencia.trim())
      : [],
      informacionAdicional: req.body.informacionAdicional,
    }
      productModel.updateProduct(updatedProduct);

      res.redirect('/products/' + updatedProduct.id + '/detail');
  }
}




module.exports = controller;

