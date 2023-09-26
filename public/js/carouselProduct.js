document.addEventListener("DOMContentLoaded", function () {
  const productCarousel = document.querySelector("#productos .carousel-inner");
  const scrollLeftButton = document.getElementById("scroll-left-btn"); 
  const scrollRightButton = document.getElementById("scroll-right-btn"); 

  let currentIndex = 0;

  
  fetch("http://localhost:3010/api/productos")
    .then((response) => response.json())
    .then((data) => {
      const products = data.data;

      function showImages() {
        // Limpia el contenido actual del carrusel interno
        productCarousel.innerHTML = "";

        // Crea un conjunto de imágenes para mostrar
        const imageSet = document.createElement("div");
        imageSet.classList.add("image-set");

        // Agrega las imágenes al conjunto y establece el estilo para mostrarlas en línea horizontal
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          const image = document.createElement("img");
          image.src = product.image;
          image.alt = product.name;          
          image.style.display = "inline-block";          
          image.style.maxWidth = "50%";         
          imageSet.appendChild(image);
        }

       
        productCarousel.appendChild(imageSet);
      }


     
      scrollRightButton.addEventListener("click", () => {
      
        productCarousel.scrollLeft += 100; 
      });

      
      scrollLeftButton.addEventListener("click", () => {
       
        productCarousel.scrollLeft -= 100; 
      });
     
      showImages();
    })
    .catch((error) => {
      console.error("Error al cargar imágenes de productos:", error);
    });
});