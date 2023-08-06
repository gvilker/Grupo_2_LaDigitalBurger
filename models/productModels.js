const { json } = require('express');
const fs = require ('fs');
const path = require ('path');

const modelo = {

    fileRoute: path.join(__dirname, '../data/productos.json'),

    findAll: () => { 
    // para buscar el contenido del archivo JSON
    const jsonData = fs.readFileSync(modelo.fileRoute, 'utf-8');
    //para convertir el JSON a lenguaje de JS
    const productos = JSON.parse(jsonData);

    return productos;
},

findById: (id) => {
    const productos = modelo.findAll();
    const selectedProduct = productos.find(productoActual => productoActual.id == id);
    return selectedProduct;
},

createProduct: (bodyData) => {
    let productos = modelo.findAll();
    const lastProdId = productos[productos.length -1].id
    const newProduct = {
        id: lastProdId + 1,
        ...bodyData
    };

    productos.push(newProduct);

    // convertimos el array a JSON
    const jsonData = JSON.stringify(productos);
    fs.writeFileSync(modelo.fileRoute, jsonData, 'utf-8');
    return newProduct;
},

destroy: (id) => {
    let productos = modelo.findAll();
    productos = productos.filter(productoActual => productoActual.id !== id);
    const jsonProducts = JSON.stringify(productos);
    fs.writeFileSync(modelo.fileRoute, jsonProducts, 'utf-8');
},

updateProduct: (updateProduct) => {
    // Buscar array de productos ya existentes
    let productos = modelo.findAll();
    // Buscar el indice del producto de id en cuestión
    const prodIndex = productos.findIndex(productoActual => productoActual.id === updateProduct.id);
    // Modificar el elemento del array en ese índice pasado por parámetro
    productos[prodIndex] = updateProduct;
    // convertir el nuevo array a JSON
    const productsJson = JSON.stringify(productos);
    // guardar en el JSON
    fs.writeFileSync(modelo.fileRoute, productsJson, 'utf-8');
}
};

module.exports= modelo;