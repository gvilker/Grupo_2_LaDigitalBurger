import React from "react";
import { Link } from "react-router-dom";

function GenresInDb() {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Datos en Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <Link to="/ListaProductos" style={{ textDecoration: 'none' }}>
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Productos</div>
                </div>
              </Link>
            </div>
            <div className="col-lg-6 mb-4">
              <Link to="/ListaUsuarios" style={{ textDecoration: 'none' }}>
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Usuarios</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
