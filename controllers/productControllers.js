const path = require ("path");

const controller = {
    producto: (req, res) => {
        res.render("producto");
    },
}

module.exports = controller;