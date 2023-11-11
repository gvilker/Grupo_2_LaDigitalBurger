import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProductData } from './apiUtils';

function ListaProductos() {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const productsData = await fetchProductData();
      setProductData(productsData);
    }

    fetchData();
  }, []);

  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid">
      <div>
        <h1 className="font-weight-bold text-center">Productos</h1>
      </div>

      <div className="row">
        {productData.length === 0 ? (
          <div className="col-12">
            <div className="alert alert-warning text-center">No se encontraron productos</div>
          </div>
        ) : (
          productData.map((product, i) => (
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
