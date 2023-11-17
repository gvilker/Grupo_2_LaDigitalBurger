    document.addEventListener("DOMContentLoaded", function() {

        var deleteForm = document.getElementById("deleteForm");


        deleteForm.addEventListener("submit", function(e) {
            e.preventDefault();

            var confirmation = confirm("¿Estás seguro de que deseas eliminar el usuario?");

            if (confirmation) {
                deleteForm.submit();
            }
        });
    });

