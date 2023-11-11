import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserData } from './apiUtils';

function ListaUsuarios() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const userData = await fetchUserData();
      setUserData(userData);
    }

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div>
        <h1 className="font-weight-bold text-center">Usuarios</h1>
      </div>

      <div className="row">
        {userData.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center">No se encontraron usuarios</div>
          </div>
        ) : (
          userData.map((user, i) => (
            <div className="col-sm-6 col-md-3 my-4" key={i}>
              <div className="card shadow mb-4 h-100">
                <div className="card-header py-3">
                  <h5 className="m-0 font-weight-bold text-gray-800">{user.name}</h5>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      src={`http://localhost:3010${user.avatar}`}
                      alt={user.name}
                      style={{ width: '100%', height: '200px', objectFit: 'contain' }}
                    />
                  </div>
                  <p>Alias: {user.alias}</p>
                  <p>Email: {user.email}</p>
                  <p>Tipo de usuario: {user.user_type}</p>
                  <br></br>
                  <div className="text-center">
                    <Link to={`/usuarios/${user.id}/profile`} className="btn btn-primary">
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

export default ListaUsuarios;
