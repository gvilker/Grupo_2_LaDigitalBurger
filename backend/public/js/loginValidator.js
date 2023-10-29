window.addEventListener('load', function() {
    let button = document.querySelector('#button');
    let loginForm = document.querySelector('form');
    let inputEmail = document.querySelector('#inputEmail');
    let erEmail = document.querySelector('.erEmail');
    let inputPassword = document.querySelector('#inputPassword');
    let erPassword = document.querySelector('.erPassword');
  
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      let errors = {};
  
      if (inputEmail.value.length < 1) {
        errors.email = 'Escribe tu correo electrónico';
        inputEmail.classList.add('error');
      } else if (!/^\S+@\S+\.\S+$/.test(inputEmail.value)) {
        errors.email = 'Debes escribir un formato de correo válido';
        inputEmail.classList.add('error');
      } else {
        inputEmail.classList.remove('error');
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
  
      if (Object.keys(errors).length >= 1) {
        erEmail.innerText = errors.email ? errors.email : '';
        erPassword.innerText = errors.password ? errors.password : '';

      } else {
        loginForm.submit();
      }
    });
  });