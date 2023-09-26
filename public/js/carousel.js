document.addEventListener("DOMContentLoaded", function() {
    const headerCarousel = document.querySelector("#home .carousel");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const images = headerCarousel.querySelectorAll(".carousel-image");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function nextImage() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    }

    showImage(currentIndex);

    nextButton.addEventListener("click", () => {
        nextImage();
    });

    prevButton.addEventListener("click", () => {
        prevImage();
    });

    // Agregar la función para cambiar automáticamente las imágenes cada dos segundos
    setInterval(() => {
        nextImage();
    }, 3500); // Cambiar de imagen cada 2 segundos (2000 ms)
});