function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;     
        res.locals.userType = req.session.userLogged.user_type;
    }
    next();
}

module.exports = userLoggedMiddleware;