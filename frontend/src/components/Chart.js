import React, { useState, useEffect } from 'react';
import ChartRow from './ChartRow';
import { fetchProductData } from './apiUtils';

function Chart() {
  const [tableRowsData, setTableRowsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);

  useEffect(() => {
    async function fetchData() {
      const productData = await fetchProductData();

      const formattedData = productData.map((product) => ({
        Id: product.Id,
        Nombre: product.name,
        Precio: product.price,
        Categories: [product.spicy ? 'Picante' : 'No Picante'],
      }));

      setTableRowsData(formattedData);
    }

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = tableRowsData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(tableRowsData.length / productsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
            <thead>
              <tr>
                <th className="text-center">Nombre</th>
                <th className="text-center">Precio</th>
                <th className="text-center">Categoria</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th className="text-center">Nombre</th>
                <th className="text-center">Precio</th>
                <th className="text-center">Categoria</th>
              </tr>
            </tfoot>
            <tbody>
              {currentProducts.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <p>
            Página {currentPage}/{totalPages}
          </p>
          <button className="btn btn-secondary" onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <button className="btn btn-secondary" onClick={nextPage} disabled={currentPage === totalPages}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chart;
