const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

const userModel = {
  fileRoute: path.join(__dirname, '../data/users.json'),

  findAll: () => {
    const jsonData = fs.readFileSync(userModel.fileRoute, 'utf-8');
    const users = JSON.parse(jsonData);
    return users;
  },

  findById: (id) => {
    const users = userModel.findAll();
    const selectedUser = users.find(user => user.id === id);
    return selectedUser;
  },

  createUser: (userData, imageName) => {
    let users = userModel.findAll();
    const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
    const newUser = {
      id: lastUserId + 1,
      ...userData, 
      avatar: `/images/avatars/${imageName}`  // Asegúrate de que la ruta sea correcta
    };

    // Hashear la contraseña antes de almacenarla
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(newUser.contrasena, saltRounds);
    newUser.contrasena = hashedPassword;

    users.push(newUser);

    const jsonData = JSON.stringify(users);
    fs.writeFileSync(userModel.fileRoute, jsonData, 'utf-8');
    return newUser;
  },

  deleteUser: (id) => {
    let users = userModel.findAll();
    users = users.filter(user => user.id !== id);
    const jsonUsers = JSON.stringify(users);
    fs.writeFileSync(userModel.fileRoute, jsonUsers, 'utf-8');
  },

  updateUser: (updatedUser) => {
    let users = userModel.findAll();
    const userIndex = users.findIndex(user => user.id === updatedUser.id);
    
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      const usersJson = JSON.stringify(users);
      fs.writeFileSync(userModel.fileRoute, usersJson, 'utf-8');
    }
  }
};

module.exports = userModel;