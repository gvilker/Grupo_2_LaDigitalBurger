const buscador = document.querySelector('.search-input');

    buscador.addEventListener('input', e => {
        searchProduct(e.target.value.toLowerCase());
    });

    const searchProduct = name => { 
    const productos = document.querySelectorAll('.producto'); 

    productos.forEach(producto => {
        const nombreProducto = producto.querySelector('.burger').textContent.toLowerCase(); 
        
        if (!nombreProducto.includes(name)) {
            producto.style.display = 'none';
        } else {
            producto.style.display = 'grid'; 
        }
    });
}