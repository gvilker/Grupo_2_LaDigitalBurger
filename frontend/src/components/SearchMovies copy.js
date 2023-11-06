import React, { useState, useEffect } from 'react';

function SearchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const apiKey = '16cc39dd'; // Reemplaza 'TU_API_KEY' con tu API Key
        const keyword = 'action'; // Puedes cambiar esto si quieres buscar otra palabra clave
        const apiUrl = `http://www.omdbapi.com/?s=${keyword}&apikey=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        // Actualiza el estado 'movies' con los datos de la API
        setMovies(data.Search || []);
      } catch (error) {
        console.error('Error al cargar datos desde la API', error.message);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="container-fluid">
      {/* Resto del código del formulario de búsqueda */}
      <div className="row">
        {/* Listado de películas */}
        {movies.length > 0 ? (
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
                  <p>{movie.Year}</p>
                  {/* Muestra otros campos si es necesario */}
                  <p>Rated: {movie.Rated}</p>
                  <p>Director: {movie.Director}</p>
                  <p>Plot: {movie.Plot}</p>
                  {/* Agrega más campos según tus necesidades */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-warning text-center">No se encontraron películas</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchMovies;
