const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userModel = {
  fileRoute: path.join(__dirname, '../data/users.json'),

  findAll: () => {
    const jsonData = fs.readFileSync(userModel.fileRoute, 'utf-8');
    const users = JSON.parse(jsonData);
    return users;
  },

  findByPk: (id) => {
    const users = userModel.findAll();
    const userFound = users.find(user => user.id === id);
    return userFound;
  },

  findByFiels: (field, text) => {
    const users = userModel.findAll();
    const userFound = users.find(user => user[field] === text);
    return userFound;
  },

  createUser: (userData, imageName) => {
    let users = userModel.findAll();
    const lastUserId = users.length > 0 ? users[users.length - 1].id : 0;
    const newUser = {
      id: uuid.v4(),
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
    let finalUsers = users.filter(user => user.id !== id);
    const jsonUsers = JSON.stringify(finalUsers);
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