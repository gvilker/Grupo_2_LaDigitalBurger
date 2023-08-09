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

    const filenames = req.files.map(file => file.filename);
    console.log(filenames)

    const imagePath = '/images/products/' + filenames[0];
    
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
      ingredientesAdicionales: req.body.ingredientesAdicionales,
      picante: req.body.picante === 'true', 
      sugerenciasAcompanamiento: req.body.sugerenciasAcompanamiento,
      informacionAdicional: req.body.informacionAdicional,
    }
    
    /* let updatedProduct = {
          id: Number(req.params.id)
      };

      updatedProduct = {
          ...updatedProduct,
          ...req.body
      };*/


      /* 
          const updatedProduct = req.body;
          updatedProduct.id = Number(req.params.id); 
      */

      productModel.updateProduct(updatedProduct);

      res.redirect('/products/' + updatedProduct.id + '/detail');
  }
}




module.exports = controller;

