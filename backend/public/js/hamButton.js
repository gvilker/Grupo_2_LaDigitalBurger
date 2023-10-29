window.addEventListener('load', function () {
    let hamButton = document.querySelector('.hamburguer-boton');
    let menuContainer = document.querySelector('.menu-container');

    hamButton.addEventListener('click', function () {
        // Cambia las clases del botón de hamburguesa y controla la visibilidad de la lista
        hamButton.classList.toggle('active');
        menuContainer.classList.toggle('show-menu');

        // Verifica si la clase show-menu está presente y muestra u oculta la lista
        if (menuContainer.classList.contains('show-menu')) {
            menuContainer.style.display = 'block';
            

        } else {
            menuContainer.style.display = 'none';
        }
    });
});
