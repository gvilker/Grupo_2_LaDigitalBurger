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
       res.render('createProduct');
    },

    postProduct: (req, res) => {
      console.log(req.files);
      
      const filename = req.file.map(file => file.filename);

        const newProduct = { 
        nombre:"Clásica",
        descripcion:"La hamburguesa clásica con lechuga, tomate y cebolla.",
        precio:9.99,
        imagen: filename,
        calorias:380,
        grasas:20,
        proteinas:25,
        carbohidratos:35,
        tamano:220,
        ingredientesAdicionales:["Queso suizo","Tocino crujiente","Salsa barbacoa"],
        picante:false,
        sugerenciasAcompanamiento:["Papas fritas tradicionales","Refresco frío","Té helado"],
        informacionAdicional:"La clásica que nunca pasa de moda"
      }

      const createdProduct = productModel.productoCreate(newProduct);

      res.redirect('/products/' + createdProduct.id + '/detail');

      // Desde los POST no renderizamos vistas, solo redireccionamos
      //res.redirect('/products');
  },
  }



module.exports = controller;

