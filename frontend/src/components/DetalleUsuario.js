
import React, { useEffect, useState } from 'react';
import { fetchDataFromAPI } from './apiUtils';

function DetalleUsuario({ match }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function fetchUsuario() {
      try {
        const usuarioId = match.params.id;
        const apiUrl = `http://localhost:3010/api/usuarios/${usuarioId}/profile`;
        const data = await fetchDataFromAPI(apiUrl);
        setUsuario(data);
      } catch (error) {
        console.error('Error al cargar detalles del usuario desde la API', error.message);
      }
    }

    fetchUsuario();
  }, [match.params.id]);

  if (!usuario) {
    return <div>Loading...</div>;
  }

  // Resto del código para mostrar detalles del usuario...

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow mb-4">
            <img
              src={`http://localhost:3010${usuario.avatar}`}
              alt={usuario.name}
              className="card-img-top"
              style={{ width: '100%', height: '200px', objectFit: 'contain', marginTop: '20px' }}
            />
            <div className="card-body">
              <h5 className="m-0 font-weight-bold text-gray-800 text-center">{usuario.name}</h5>
              <p className="card-text">Alias: {usuario.alias}</p>
              <p className="card-text">Email: {usuario.email}</p>
              <p className="card-text">Tipo: {usuario.user_type}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleUsuario;
