window.addEventListener('load', function() {
    let button = document.querySelector('#button');
    let inputName = document.querySelector('#inputName');
    let erName = document.querySelector('.erName');
    let registerForm = document.querySelector('form');
    let inputAlias = document.querySelector('#inputAlias');
    let erAlias = document.querySelector('.erAlias');
    let inputEmail = document.querySelector('#inputEmail');
    let erEmail = document.querySelector('.erEmail');
    let inputFile = document.querySelector('#inputFile');
    let erFile = document.querySelector('.erFile');
    let inputPassword = document.querySelector('#inputPassword');
    let erPassword = document.querySelector('.erPassword');
    let inputRePassword = document.querySelector('#inputRePassword');
    let erRePassword = document.querySelector('.erRePassword');
  
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      let errors = {};
  
      if (inputName.value.length < 1) {
        errors.name = 'Este campo debe estar completo';
        inputName.classList.add('error'); 
      } else {
        inputName.classList.remove('error');
      }
  
      if (inputAlias.value.length < 1) {
        errors.alias = 'Ingrese un alias';
        inputAlias.classList.add('error');
      } else {
        inputAlias.classList.remove('error');
      }
  
      if (inputEmail.value.length < 1) {
        errors.email = 'Escribe tu correo electrónico';
        inputEmail.classList.add('error');
      } else if (!/^\S+@\S+\.\S+$/.test(inputEmail.value)) {
        errors.email = 'Debes escribir un formato de correo válido';
        inputEmail.classList.add('error');
      } else {
        inputEmail.classList.remove('error');
      }
  
      if (!inputFile.files.length) {
        errors.file = 'Tienes que subir una imagen';
        inputFile.classList.add('error');
      } else {
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
        let fileExtension = inputFile.files[0].name.split('.').pop().toLowerCase();
  
        if (!acceptedExtensions.includes('.' + fileExtension)) {
          errors.file = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`;
          inputFile.classList.add('error');
        } else {
          inputFile.classList.remove('error');
        }
      }
  
      if (inputPassword.value.length < 1) {
        errors.password = 'Debes proporcionar una contraseña';
        inputPassword.classList.add('error');
      } else if (inputPassword.value.length < 8 && inputPassword.value.length >= 1) {
        errors.password = 'La contraseña debe tener al menos 8 caracteres';
        inputPassword.classList.add('error');
      } else {
        inputPassword.classList.remove('error');
      }
  
      if (inputRePassword.value.length < 1) {
        errors.rePassword = 'Repita su contraseña';
        inputRePassword.classList.add('error');
      } else if (inputRePassword.value !== inputPassword.value) {
        errors.rePassword = 'Las contraseñas no coinciden';
        inputRePassword.classList.add('error');
      } else {
        inputRePassword.classList.remove('error');
      }
  
      if (Object.keys(errors).length >= 1) {
        erName.innerText = errors.name ? errors.name : '';
        erAlias.innerText = errors.alias ? errors.alias : '';
        erEmail.innerText = errors.email ? errors.email : '';
        erFile.innerText = errors.file ? errors.file : '';
        erPassword.innerText = errors.password ? errors.password : '';
        erRePassword.innerText = errors.rePassword ? errors.rePassword : '';
      } else {
        registerForm.submit();
      }
    });
  });