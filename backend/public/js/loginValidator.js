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
    } else if (!/^\S+@\S+\.\S+$/.test(inputEmail.value)) {
      errors.email = 'Debes escribir un formato de correo válido';
    }

    if (inputPassword.value.length < 1) {
      errors.password = 'Debes proporcionar una contraseña';
    } else if (inputPassword.value.length < 8) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres';
    }

    erEmail.innerText = errors.email ? errors.email : '';
    inputEmail.classList.toggle('error', !!errors.email);

    erPassword.innerText = errors.password ? errors.password : '';
    inputPassword.classList.toggle('error', !!errors.password);

    if (Object.keys(errors).length === 0) {
      loginForm.submit();
    }
  });

  inputEmail.addEventListener('input', function() {
    inputEmail.classList.remove('error');
    erEmail.innerText = '';
  });

  inputPassword.addEventListener('input', function() {
    inputPassword.classList.remove('error');
    erPassword.innerText = '';
  });
});