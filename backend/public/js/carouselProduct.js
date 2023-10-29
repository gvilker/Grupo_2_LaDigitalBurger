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

        productCarousel.innerHTML = "";
      

        const imageSet = document.createElement("div");
        imageSet.classList.add("image-set");
      

        for (let i = 0; i < products.length; i++) {
          const product = products[i];
      

          const productContainer = document.createElement("div");
          productContainer.classList.add("product-container");
      

          const image = document.createElement("img");
          image.src = product.image;
          image.alt = product.name;
      
          
          const productName = document.createElement("p");
          productName.textContent = product.name;
      
          
          productContainer.style.display = "inline-block";
      
          
          productContainer.appendChild(image);
          productContainer.appendChild(productName);
      
        
          imageSet.appendChild(productContainer);
        }
      
        productCarousel.appendChild(imageSet);
      }


scrollRightButton.addEventListener("click", () => {
  productCarousel.scrollBy({
    left: 400, 
    behavior: "smooth", 
  });
});

scrollLeftButton.addEventListener("click", () => {
  productCarousel.scrollBy({
    left: -400, 
    behavior: "smooth",
  });
});

let isDragging = false;
let startX;
let scrollLeft;

productCarousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX - productCarousel.offsetLeft;
  scrollLeft = productCarousel.scrollLeft;


  document.body.style.userSelect = "none";
  productCarousel.style.cursor = "grabbing"; 
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;

  e.preventDefault();
  const x = e.pageX - productCarousel.offsetLeft;
  const walk = (x - startX) * 2; 
  productCarousel.scrollLeft = scrollLeft - walk;
});

document.addEventListener("mouseup", (e) => {
  isDragging = false;


  document.body.style.userSelect = "auto";
  productCarousel.style.cursor = "grab";

  
  e.stopPropagation();
});


productCarousel.addEventListener("click", (e) => {
  if (isDragging) {
    e.preventDefault();
    e.stopPropagation();
  }
});


      showImages();
    })
    .catch((error) => {
      console.error("Error al cargar imágenes de productos:", error);
    });
});