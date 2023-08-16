function rememberMeMiddleware (req, res, next) {

    if(req.cookies.recordame != undefined && req.session.UserLoggedIn == undefined) {
        const users = userModel.findAll();
    
        let userToLogin;

        for (let i = 0; i < users.length; i++) {
            if (users[i].correo_electronico == req.cookies.recordame){
                userToLogin = users[i];
                break;
                }
            }
            if (userToLogin) {
                req.session.UserLoggedIn = userToLogin;
            }
        }    
        
        next();
    }
    
module.exports = rememberMeMiddleware;