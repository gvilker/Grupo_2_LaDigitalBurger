import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductData, fetchDataFromAPI } from './apiUtils';

function LastProductInDb() {
  const [lastProductData, setLastProductData] = useState(null);

  useEffect(() => {
    async function fetchLastProduct() {
      try {
        const productData = await fetchProductData();

        const lastProductId = productData.reduce(
          (maxId, product) => (product.id > maxId ? product.id : maxId),
          0
        );

        const apiUrl = `http://localhost:3010/api/productos/${lastProductId}/detail`;
        const lastProductDetail = await fetchDataFromAPI(apiUrl);

        setLastProductData(lastProductDetail);
      } catch (error) {
        console.error('Error al cargar detalles del último producto desde la API', error.message);
      }
    }

    fetchLastProduct();
  }, []);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la Base de Datos</h5>
        </div>
        <div className="card-body">
          {lastProductData ? (
            <>
              <h6 className="font-weight-bold text-gray-800">{lastProductData.name}</h6>
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: '20rem' }}
                  src={`http://localhost:3010${lastProductData.image}`}
                  alt="Último Producto"
                />
              </div>
              <p>{lastProductData.description}</p>
              <p>Precio: {lastProductData.price}</p>
              <Link to={`/producto/${lastProductData.id}/detail`} className="btn btn-danger">
                Ver detalles del producto
              </Link>
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;
