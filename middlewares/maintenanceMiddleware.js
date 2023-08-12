const express = require('express');
const app = express();
let isMaintenanceMode = false;

function maintenanceMiddleware(req, res, next) {

    if (isMaintenanceMode === true) {
       return res.render('en-Mantenimiento');
    }
    next();
}

module.exports = maintenanceMiddleware;