window.addEventListener('load', function() {
    let button = document.querySelector('#button');
    let createProductForm = document.querySelector('form');
    let inputName = document.querySelector('#name');
    let erName = document.querySelector('.erName');
    let inputDescription = document.querySelector('#description');
    let erDescription = document.querySelector('.erDescription');
    let inputPrice = document.querySelector('#price');
    let erPrice = document.querySelector('.erPrice');
  
    button.addEventListener('click', function(event) {
      event.preventDefault();
  
      let errors = {};
  
      if (inputName.value.length < 1) {
        errors.name = 'El nombre es obligatorio';
        inputName.classList.add('error'); 
      } else if (inputName.value.length < 3 || inputName.value.length > 50) {
        errors.name = 'El nombre debe tener entre 3 y 50 caracteres';
        inputName.classList.add('error');  
      } else {
        inputName.classList.remove('error');
      }
      
      if (inputDescription.value.length < 1) {
        errors.description = 'La descripción es obligatoria';
        inputDescription.classList.add('error');
      } else if (inputDescription.value.length < 10 || inputDescription.value.length > 500) {
        errors.description = 'La descripción debe tener entre 10 y 500 caracteres';
        inputDescription.classList.add('error');
      } else {
        inputDescription.classList.remove('error');
      }


      const priceValue = parseFloat(inputPrice.value);
      if (isNaN(priceValue) || priceValue <= 0.01) {
        errors.price = 'El precio debe ser mayor a 0';
        inputPrice.classList.add('error');
      } else {
        inputPrice.classList.remove('error');
      }

      if (Object.keys(errors).length >= 1) {
        erName.innerText = errors.name ? errors.name : '';
        erDescription.innerText = errors.description ? errors.description : '';
        erPrice.innerText = errors.price ? errors.price : '';
      } else {
        createProductForm.submit();
      }
    });


// Eventos que cambian el estilo y validan el input mientras el usuario está escribiendo    
    inputName.addEventListener('input', function() {
        if (inputName.value.length >= 3 && inputName.value.length <= 50) {
          erName.innerText = '';
          inputName.classList.remove('error');
        } else {
          erName.innerText = 'El nombre debe tener entre 3 y 50 caracteres';
          inputName.classList.add('error');
        }
      });

    inputDescription.addEventListener('input', function() {
        if (inputDescription.value.length >= 10 && inputDescription.value.length <= 500) {
          erDescription.innerText = '';
          inputDescription.classList.remove('error');
        } else {
            erDescription.innerText = 'La descripción debe tener entre 10 y 500 caracteres';
            inputDescription.classList.add('error');
          }
    })

});

