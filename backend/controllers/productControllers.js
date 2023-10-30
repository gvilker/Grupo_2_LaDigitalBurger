const db = require('../database/models');
const Product = require ('../database/models/Product')
const { validationResult } = require('express-validator');
const { productValidationRules } = require("../middlewares/validation_Creation");
const { Op } = require('sequelize');

let productController = {
  getList: function (req,res) {
    db.Product.findAll()
    .then(function(products){
      res.render('productList', { products: products });
    })
  },

  getDetail: function (req,res) {
    db.Product.findByPk(req.params.id)
    .then(function(product){
      if(product){
        res.render('productDetail', { product: product });
      } else {
        res.send('Producto no encontrado');
      }
    })
  },
  
  getCreate: function (req, res) {
    res.render ('createProduct')
  },

  postProduct: async (req, res) => {
    try {
      const filenames = req.files.map(file => file.filename);
      //console.log('Filenames:', filenames);
  
      const imagePath = '/images/products/' + filenames[0];
  

      const price = parseFloat(req.body.price);
  
      if (isNaN(price)) {   
        //console.log('Precio inválido:', req.body.price);
        return res.render('createProduct', { product: null, errors: [{ msg: 'Precio inválido' }] });
      }

      const formattedPrice = price.toFixed(2);
  
      const newProduct = {
        name: req.body.name,
        description: req.body.description,
        price: formattedPrice,
        image: imagePath,
        calories: req.body.calories,
        fat: req.body.fat,
        protein: req.body.protein,
        carbohydrates: req.body.carbohydrates,
        size: req.body.size,
        spicy: req.body.spicy === 'true',
        additional_ingredients: req.body.additional_ingredients,
        suggested_Acompaniments: req.body.suggested_Acompaniments,
        additional_Information: req.body.additional_Information,
      };
  
      const createdProduct = await db.Product.create(newProduct);
      //console.log('Producto creado:', createdProduct);
  
      res.redirect('/products/' + createdProduct.id + '/detail');
    } catch (error) {
      console.error('Error al crear el producto:', error);
      res.status(500).send('Error al crear el producto');
    }
  },
  getEdit: async (req, res) => {
    try {
        const product = await db.Product.findByPk(req.params.id);

        res.render('editProduct', { product });
    } catch (error) {
        res.send(error)
    }        
},
  updateProduct: async (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {     
      const product = await db.Product.findByPk(req.params.id);
      return res.render('editProduct', { product, errors: errors.array() });
    }
  
    const filenames = req.files && req.files.length > 0 ? req.files.map(file => file.filename) : [];
    //console.log(filenames);
  
    let imagePath = req.files && req.files.length > 0
      ? '/images/products/' + req.files[0].filename
      : req.body.image; 
  
    try {
      const product = await db.Product.findByPk(req.params.id);  
      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }  
     
      await product.update({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: imagePath,
        calories: req.body.calories,
        fat: req.body.fat,
        protein: req.body.protein,
        carbohydrates: req.body.carbohydrates,
        size: req.body.size,
        spicy: req.body.spicy === 'true',
        additional_ingredients: req.body.additional_ingredients,
        suggested_Acompaniments: req.body.suggested_Acompaniments,
        additional_Information: req.body.additional_Information,
      });
  
      res.redirect('/products/' + product.id + '/detail');
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).send('Error al actualizar el producto');
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const product = await db.Product.findByPk(req.params.id);
  
      if (!product) {
        return res.status(404).send('Producto no encontrado');
      }  
      await product.destroy();
  
      res.redirect('/products'); 
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).send('Error al eliminar el producto');
    }
  },
  searchProducts: async (req, res) => {
    try {
      const query = req.query.query;
      const criteria = req.query.criteria;
  
      let products;
  
      if (criteria === 'name') {
     
        products = await db.Product.findAll({
          where: {
            name: {
              [Op.like]: `%${query}%`
            }
          }
        });
      } else if (criteria === 'description') {
      
        products = await db.Product.findAll({
          where: {
            description: {
              [Op.like]: `%${query}%`
            }
          }
        });
      } else if (criteria === 'price') {
        
        products = await db.Product.findAll({
          where: {
            price: {
              [Op.like]: `%${query}%`
            }
          }
        });
      }     
  
      res.render('productList', { products });
    } catch (error) {
      console.error('Error al buscar productos:', error);
      res.status(500).send('Error al buscar productos');
    }
  },
}

module.exports = productController;
