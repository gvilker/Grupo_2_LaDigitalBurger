
function isAdminMiddleware(req, res, next) {
    
    if (res.locals.isLogged && res.locals.userType === 2) {
       
        next();
    } else {
       
        res.status(403).send('Acceso no autorizado'); 
    }
}

module.exports = isAdminMiddleware;