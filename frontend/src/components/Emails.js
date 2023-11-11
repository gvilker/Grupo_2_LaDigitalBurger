import React from 'react';

function Emails() {
  const emails = [
    { id: 1, from: 'john.doe@example.com', subject: 'Incrementando la oferta', body: 'Nuevo producto...', date: '10/25/2023' },
    { id: 2, from: 'alice.smith@example.com', subject: 'Proyecto Update', body: 'Lanzamiento de la página web...', date: '10/26/2023' },
    { id: 4, from: 'bob.jones@example.com', subject: 'Anuncio importante', body: 'Apertura sucursal Av. Monroe 860 CABA...', date: '10/27/2023' },
    { id: 5, from: 'Ian.Commit@example.com', subject: 'Aumento de ventas', body: 'Promoción especial...', date: '10/28/2023' },
    { id: 6, from: 'Gabi.Code@example.com', subject: 'No te olvides', body: 'Recordatorio de reunión...', date: '10/29/2023' },
    { id: 7, from: 'Bruno.React@example.com', subject: 'Las cosas contadas', body: 'Control inventario...', date: '10/30/2023' },
  ];

  return (
    <div className="container mt-4">
      <h2>Emails</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">De</th>
            <th scope="col">Asunto</th>
            <th scope="col">Mensaje</th>
            <th scope="col">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email) => (
            <tr key={email.id}>
              <td>{email.from}</td>
              <td>{email.subject}</td>
              <td>{email.body}</td>
              <td>{email.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Emails;
