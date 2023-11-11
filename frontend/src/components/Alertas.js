import React from 'react';

function Alertas() {
  const alertas = [
    { id: 1, message: 'Server Down', date: '2023-09-10' },
    { id: 2, message: 'Nuevo usuario registrado', date: '2023-11-11' },
    { id: 3, message: 'Alerta High Traffic', date: '2023-11-12' },
  ];

  return (
    <div className="container mt-4">
      <h2>Alertas</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Mensaje</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {alertas.map((alerta) => (
            <tr key={alerta.id}>
              <td>{alerta.message}</td>
              <td>{alerta.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alertas;
