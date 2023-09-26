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

    showImage(currentIndex);

    nextButton.addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    });

    prevButton.addEventListener("click", () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        showImage(currentIndex);
    });
});