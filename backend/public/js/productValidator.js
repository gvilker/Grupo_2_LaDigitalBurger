window.addEventListener('load', function() {
    let button = document.querySelector('#button');
    let createProductForm = document.querySelector('form');
    let inputName = document.querySelector('#name');
    let erName = document.querySelector('.erName');
    let inputDescription = document.querySelector('#description');
    let erDescription = document.querySelector('.erDescription');
    let inputPrice = document.querySelector('#price');
    let erPrice = document.querySelector('.erPrice');
    let inputImage = document.querySelector('#image');
    let erImage = document.querySelector('.erImage');
    let inputCalories = document.querySelector('#calories');
    let erCalories = document.querySelector('.erCalories');
    let inputFat = document.querySelector('#fat');
    let erFat = document.querySelector('.erFat');
    let inputProtein = document.querySelector('#protein');
    let erProtein = document.querySelector('.erProtein');
    let inputCarbohydrates = document.querySelector('#carbohydrates');
    let erCarbohydrates = document.querySelector('.erCarbohydrates');
    let inputSize = document.querySelector('#size');
    let erSize = document.querySelector('.erSize');


  
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

      if (!inputImage.files.length) {
        errors.image = 'Tienes que subir una imagen';
        inputImage.classList.add('error');
      } else {
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
        let fileExtension = inputImage.files[0].name.split('.').pop().toLowerCase();
  
        if (!acceptedExtensions.includes('.' + fileExtension)) {
          errors.image = `Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`;
          inputImage.classList.add('error');
        } else {
          inputImage.classList.remove('error');
        }
      }

      const caloriesValue = parseFloat(inputCalories.value);
      if (isNaN(caloriesValue)) {
        errors.calories = 'Las calorías deben ser un número entero positivo';
        inputCalories.classList.add('error');
      } else {
        inputCalories.classList.remove('error');
      }

      const fatValue = parseFloat(inputFat.value);
      if (isNaN(fatValue)) {
        errors.fat = 'Las grasas deben ser un número positivo';
        inputFat.classList.add('error');
      } else {
        inputFat.classList.remove('error');
      }

      const proteinValue = parseFloat(inputProtein.value);
      if (isNaN(proteinValue)) {
        errors.protein = 'Las proteínas deben ser un número entero positivo';
        inputProtein.classList.add('error');
      } else {
        inputProtein.classList.remove('error');
      }

      const carbohydratesValue = parseFloat(inputCarbohydrates.value);
      if (isNaN(carbohydratesValue)) {
        errors.carbohydrates = 'Los carbohidratos deben ser un número entero positivo';
        inputCarbohydrates.classList.add('error');
      } else {
        inputCarbohydrates.classList.remove('error');
      }

      const sizeValue = parseFloat(inputSize.value);
      if (isNaN(sizeValue) || sizeValue <= 1.00) {
        errors.size = 'El tamaño debe ser un número entero positivo';
        inputSize.classList.add('error');
      } else {
        inputSize.classList.remove('error');
      }

      if (Object.keys(errors).length >= 1) {
        erName.innerText = errors.name ? errors.name : '';
        erDescription.innerText = errors.description ? errors.description : '';
        erPrice.innerText = errors.price ? errors.price : '';
        erImage.innerText = errors.image ? errors.image : ''; 
        erCalories.innerText = errors.calories ? errors.calories : '';
        erFat.innerText = errors.fat ? errors.fat : '';
        erProtein.innerText = errors.protein ? errors.protein : '';
        erCarbohydrates.innerText = errors.carbohydrates ? errors.carbohydrates : '';
        erSize.innerText = errors.size ? errors.size : '';

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

    inputPrice.addEventListener('input', function(){
      const priceValue = parseFloat(inputPrice.value);
      if (isNaN(priceValue) || priceValue <= 0) {
        erPrice.innerText = 'El precio debe ser mayor a 0';
        inputPrice.classList.add('error');
      } else {
        erPrice.innerText = '';
        inputPrice.classList.remove('error');
      }
    })

    inputImage.addEventListener('input', function(){
      if (inputImage.files.length) {
        erImage.innerText = '';
        inputImage.classList.remove('error');
    } else {
      erImage.innerText = 'Tienes que subir una imagen';
      inputImage.classList.add('error');
    }
  })   
  
    inputCalories.addEventListener('input', function(){
      const caloriesValue = parseFloat(inputCalories.value);
      if (isNaN(caloriesValue) || caloriesValue <= 0) {
        erCalories.innerText = 'Las calorías deben ser un número entero positivo';
        inputCalories.classList.add('error');
      } else {
        erCalories.innerText = '';
        inputCalories.classList.remove('error');
      }
    })

    inputFat.addEventListener('input', function(){
      const fatValue = parseFloat(inputFat.value);
      if (isNaN(fatValue) || fatValue <= 0) {
        erFat.innerText = 'Las grasas deben ser un número entero positivo';
        inputFat.classList.add('error');
      } else {
        erFat.innerText = '';
        inputFat.classList.remove('error');
      }
    })

    inputProtein.addEventListener('input', function(){
      const proteinValue = parseFloat(inputProtein.value);
      if (isNaN(proteinValue) || proteinValue <= 0) {
        erProtein.innerText = 'Las proteinas deben ser un número entero positivo';
        inputProtein.classList.add('error');
      } else {
        erProtein.innerText = '';
        inputProtein.classList.remove('error');
      }
    })

    inputCarbohydrates.addEventListener('input', function(){
      const carbohydratesValue = parseFloat(inputCarbohydrates.value);
      if (isNaN(carbohydratesValue) || carbohydratesValue <= 0) {
        erCarbohydrates.innerText = 'Los carbohidratos deben ser un número entero positivo';
        inputCarbohydrates.classList.add('error');
      } else {
        erCarbohydrates.innerText = '';
        inputCarbohydrates.classList.remove('error');
      }
    })

    inputSize.addEventListener('input', function(){
      const sizeValue = parseFloat(inputSize.value);
      if (isNaN(sizeValue) || sizeValue <= 0) {
        erSize.innerText = 'El tamaño debe ser un número entero positivo';
        inputSize.classList.add('error');
      } else {
        erSize.innerText = '';
        inputSize.classList.remove('error');
      }
    })   

    /*function validateInput(inputElement, errorElement, minLength, maxLength, errorText) {
      inputElement.addEventListener('input', function () {
        const inputValue = inputElement.value;
        const isValid = inputValue.length >= minLength && inputValue.length <= maxLength;
        
        errorElement.innerText = isValid ? '' : errorText;
        inputElement.classList.toggle('error', !isValid);
      });
    }
    
    function validateNumericInput(inputElement, errorElement, minValue, errorText) {
      inputElement.addEventListener('input', function () {
        const numericValue = parseFloat(inputElement.value);
        const isValid = !isNaN(numericValue) && numericValue > minValue;
    
        errorElement.innerText = isValid ? '' : errorText;
        inputElement.classList.toggle('error', !isValid);
      });
    }    
    
    validateInput(inputName, erName, 3, 50, 'El nombre debe tener entre 3 y 50 caracteres');
    validateInput(inputDescription, erDescription, 10, 500, 'La descripción debe tener entre 10 y 500 caracteres');
    validateNumericInput(inputPrice, erPrice, 0, 'El precio debe ser mayor a 0');
    validateNumericInput(inputCalories, erCalories, 0, 'Las calorías deben ser un número entero positivo');
    validateNumericInput(inputFat, erFat, 0, 'Las grasas deben ser un número entero positivo');
    validateNumericInput(inputProtein, erProtein, 0, 'Las proteínas deben ser un número entero positivo');
    validateNumericInput(inputCarbohydrates, erCarbohydrates, 0, 'Los carbohidratos deben ser un número entero positivo');
    validateNumericInput(inputSize, erSize, 0, 'El tamaño debe ser un número entero positivo');

    inputImage.addEventListener('input', function(){
      if (inputImage.files.length) {
        erImage.innerText = '';
        inputImage.classList.remove('error');
    } else {
      erImage.innerText = 'Tienes que subir una imagen';
      inputImage.classList.add('error');
    }
  })  */ 

});

