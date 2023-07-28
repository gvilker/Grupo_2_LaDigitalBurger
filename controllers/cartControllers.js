const path = require ("path");

const controller = {
    carrito: (req, res) => {
        res.render("carrito");
    },
}

module.exports = controller;