import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListaProductos() {
  const [products, setProducts] = useState([]);
  

  async function fetchProducts() {
    try {
      const apiUrl = `http://localhost:3010/api/productos/`;
      const response = await fetch(apiUrl);
    
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Error en la solicitud: ${response.status} - ${errorMessage}`);
      }

      const data = await response.json();
      setProducts(data.data || []);
      
    } catch (error) {
      console.error('Error al cargar datos desde la API', error);
    }
  }

  

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container-fluid">
      <div>
        <h1 className="font-weight-bold text-center">Productos</h1>
      </div>
      

      <div className="row">
        {products.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center">No se encontraron productos</div>
          </div>
        ) : (
          products.map((product, i) => (
            <div className="col-sm-6 col-md-3 my-4" key={i}>
          <div className="card shadow mb-4 h-100">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  src={`http://localhost:3010${product.image}`}
                  alt={product.name}
                  style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                />
                  </div>
                  <p>Descripción: {product.description}</p>
                  <p>Precio: {product.price}</p>
                  <br></br>
                  <div className="text-center">
                  <Link to={`/producto/${product.id}/detail`} className="btn btn-primary">
                    Detalle
                  </Link>
                </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ListaProductos;



/*

import React, { useState, useEffect } from 'react';

function SearchMovies() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  async function fetchMovies() {
    try {
      const apiKey = '16cc39dd';
      const apiUrl = `http://www.omdbapi.com/?s=${searchKeyword}&apikey=${apiKey}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      // Actualiza el estado 'movies' con los datos de la API
      setMovies(data.Search || []);
      setSearched(true); // Indica que se ha realizado una búsqueda
    } catch (error) {
      console.error('Error al cargar datos desde la API', error.message);
    }
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    fetchMovies();
  }

  return (
    <div className="container-fluid">
      {/* Formulario de búsqueda *//*}
      <form method="GET" onSubmit={handleSearchSubmit}>
        <div className="form-group">
          <label htmlFor="">Buscar por título:</label>
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

      {/* Resto del código del listado de películas *//*}
      <div className="row">
        {/* Listado de películas *//*}
        {searched && movies.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center">No se encontraron películas</div>
          </div>
        ) : (
          movies.map((movie, i) => (
            <div className="col-sm-6 col-md-3 my-4" key={i}>
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      src={movie.Poster}
                      alt={movie.Title}
                      style={{ width: '90%', height: '400px', objectFit: 'cover' }}
                    />
                  </div>
                  <p>Year: {movie.Year}</p>
                  <p>Rated: {movie.Rated}</p>
                  <p>Director: {movie.Director}</p>
                  <p>Plot: {movie.Plot}</p>
                  
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SearchMovies;*/
