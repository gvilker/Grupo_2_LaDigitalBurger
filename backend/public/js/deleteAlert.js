    document.addEventListener("DOMContentLoaded", function() {
        // Selecciona el formulario por su ID
        var deleteForm = document.getElementById("deleteForm");

        // Agrega un evento de clic al botón de eliminación
        deleteForm.addEventListener("submit", function(e) {
            // Previene el envío del formulario por defecto
            e.preventDefault();

            // Muestra un mensaje de confirmación
            var confirmation = confirm("¿Estás seguro de que deseas eliminar el producto?");

            // Si el usuario confirma, envía el formulario
            if (confirmation) {
                deleteForm.submit();
            }
        });
    });

