import React, { useState, useEffect } from 'react';

function DetalleProducto({ match }) {
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    async function fetchProducto() {
      try {
        const productId = match.params.id;
        const apiUrl = `http://localhost:3010/api/productos/${productId}/detail`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        setProducto(data.data || null);

        
      } catch (error) {
        console.error('Error al cargar detalles del producto desde la API', error.message);
      }
    }

    fetchProducto();
  }, [match.params.id]);

  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow mb-4">
            <img
              src={`http://localhost:3010${producto.image}`}
              alt={producto.name}
              className="card-img-top"
              style={{ width: '100%', height: '200px', objectFit: 'contain', marginTop: '20px' }}
            />
            <div className="card-body">
              <h5 className="m-0 font-weight-bold text-gray-800 text-center">{producto.name}</h5>
              <p className="card-text">Descripción: {producto.description}</p>
              <p className="card-text">Calorias: {producto.calories}</p>
              <p className="card-text">Grasas: {producto.fat}</p>
              <p className="card-text">Proteinas: {producto.protein}</p>
              <p className="card-text">Hidratos: {producto.carbohydrates}</p>
              {producto.spicy && (
              <p className="card-text text-danger">
                <strong>Es picante</strong>
              </p>
            )}
              <p className="card-text">Adicionales: {producto.additional_ingredient}</p>
              <p className="card-text">Sugerencias: {producto.suggested_Acompaniments}</p>
              <p className="card-text">Informacion adicional: {producto.additional_Information}</p>
              <br />
              <p className="card-text font-weight-bold">Precio: {producto.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
