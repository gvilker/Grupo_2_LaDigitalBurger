const db = require('../database/models');
const User = require ('../database/models/User');

async function rememberMeMiddleware(req, res, next) {
  if (req.cookies.recordame && !req.session.userLogged) {
    try {
      const users = await db.User.findAll();
      const userToLogin = users.find((user) => user.email === req.cookies.recordame);

      if (userToLogin) {
        req.session.userLogged = userToLogin;
      }
    } catch (error) {
      console.error(error);
    }
  }

  next();
}

module.exports = rememberMeMiddleware;