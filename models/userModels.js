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

  findByFields: (field, text) => {
    const users = userModel.findAll();
    const userFound = users.find(user => user[field] === text);
    return userFound;
  },

  createUser: (userData, imageName) => {
    let users = userModel.findAll();
    const newUser = {
      id: uuid.v4(),
      ...userData, 
      avatar: `/images/avatars/${imageName}` 
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
  /*
  updateUser: (userData, imageName) => {
    let users = userModel.findAll();
    
    // Buscar el usuario a actualizar por su ID
    const userToUpdate = userModel.findByPk(userData.id);
    
    if (userToUpdate) {
        // Actualizar los datos del usuario
        userToUpdate.nombre_completo = userData.nombre_completo;
        userToUpdate.nombre_usuario = userData.nombre_usuario;
        userToUpdate.correo_electronico = userData.correo_electronico;
        userToUpdate.avatar = `/${imageName}`;
        
        // Verifica si se proporcionó una nueva contraseña
        if (userData.nueva_contrasena && userData.confirmar_nueva_contrasena) {
            if (userData.nueva_contrasena === userData.confirmar_nueva_contrasena) {
                // Hasheamos y actualizamos la nueva contraseña
                const saltRounds = 10;
                const hashedPassword = bcrypt.hashSync(userData.nueva_contrasena, saltRounds);
                userToUpdate.contrasena = hashedPassword;
            } else {
                return userToUpdate; // Retorna el usuario con mensaje de error
            }
        }
        
        // Encuentra el índice del usuario a actualizar en la matriz
        let userIndex = -1;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userToUpdate.id) {
                userIndex = i;
                break;
            }
        }
        
        if (userIndex !== -1) {
            // Actualiza los datos del usuario en la matriz
            users[userIndex] = userToUpdate;
            
            // Escribir los datos actualizados en el archivo JSON
            const usersJson = JSON.stringify(users);
            fs.writeFileSync(userModel.fileRoute, usersJson, 'utf-8');
            
            return userToUpdate; // Retorna el usuario actualizado
        }
    }
    
    return null; // Si el usuario no se encontró, retorna null
} */
updateUser: (userData, imageName) => {
  let users = userModel.findAll();

  // Buscar el usuario a actualizar por su ID
  const userToUpdate = userModel.findByPk(userData.id);

  if (userToUpdate) {
    // Actualizar los datos del usuario
    userToUpdate.nombre_completo = userData.nombre_completo;
    userToUpdate.nombre_usuario = userData.nombre_usuario;
    userToUpdate.correo_electronico = userData.correo_electronico;

    // Verifica si se proporcionó una nueva contraseña
    if (userData.nueva_contrasena && userData.confirmar_nueva_contrasena) {
      if (userData.nueva_contrasena === userData.confirmar_nueva_contrasena) {
        // Hasheamos y actualizamos la nueva contraseña
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(userData.nueva_contrasena, saltRounds);
        userToUpdate.contrasena = hashedPassword;
      } else {
        return userToUpdate; // Retorna el usuario con mensaje de error
      }
    }

    // Actualizar la imagen solo si se proporcionó una nueva
    if (imageName) {
      console.log('New image name:', imageName); // Agregar esta línea para verificar
      userToUpdate.avatar = `/images/avatars/${imageName}`; // Use the new image path
    }

    // Encuentra el índice del usuario a actualizar en la matriz
    const userIndex = users.findIndex(user => user.id === userToUpdate.id);

    if (userIndex !== -1) {
      // Actualiza los datos del usuario en la matriz
      users[userIndex] = userToUpdate;
    
      // Actualizar la ruta de la imagen en el archivo JSON
      users[userIndex].avatar = userToUpdate.avatar; // Esta línea es importante
    
      // Escribir los datos actualizados en el archivo JSON
      const usersJson = JSON.stringify(users);
      fs.writeFileSync(userModel.fileRoute, usersJson, 'utf-8');
    
      return userToUpdate; // Retorna el usuario actualizado
    }
  }  
}
};

module.exports = userModel;