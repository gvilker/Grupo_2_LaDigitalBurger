const express = require('express');
const app = express();
let isMaintenanceMode = true;

function maintenanceMiddleware(req, res, next) {

    if (isMaintenanceMode === true) {
       return res.render('en-Mantenimiento');
    }
    next();
}

module.exports = maintenanceMiddleware;