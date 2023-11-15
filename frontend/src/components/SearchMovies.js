import React, { useState, useEffect } from 'react';

function SearchMovies() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [products, setProducts] = useState([]);
  const [searched, setSearched] = useState(false);

  async function fetchProducts() {
    try {
      const apiUrl = `http://localhost:3010/api/productos`;
      const response = await fetch(apiUrl);
    
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error en la solicitud: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      setProducts(data.data || []);
      setSearched(true);
    } catch (error) {
      console.error('Error al cargar datos desde la API', error);
    }
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    fetchProducts();
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      <form method="GET" onSubmit={handleSearchSubmit}>
        <div className="form-group">
          <label htmlFor="">Buscar por nombre del producto:</label>
          <input
            type="text"
            className="form-control"
            value={searchKeyword}
            onChange={(event) => setSearchKeyword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-info">
          Search
        </button>
      </form>

      <div className="row">
        {searched && products.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center">No se encontraron productos</div>
          </div>
        ) : (
          products.map((product, i) => (
            <div className="col-sm-6 col-md-3 my-4" key={i}>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      src={`http://localhost:3010${product.image}`}
                      alt={product.name} 
                      style={{ width: '90%', height: '400px', objectFit: 'contain' }}
                    />
                  </div>
                  <p>Descripción: {product.description}</p>
                  <p>Precio: {product.price}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchMovies;