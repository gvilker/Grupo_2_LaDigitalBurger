const path = require ("path");

const controller = {
    home: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/home.html"))
        },
    carrito: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/carrito.html"))
    },
    login: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/login.html"))
    },
    producto: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/producto.html"))
    },
    register: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/register.html"))
    }
}

module.exports = controller;