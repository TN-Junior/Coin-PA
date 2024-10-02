import React from 'react';
import './Table.css';

function Table() {
  return (
    <div className="empresa-page">
      <div className="empresa-header">
        <h2>Planejamento</h2>
        <button>+</button>
      </div>
      <div className="table-container">
        <table className="empresa-table">
          <thead>
            <tr className='Title'>
              <th>Identificação</th>
              <th>Vencimento</th>
              <th>Empresa</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>34.604.380/0001-95</td>
              <td>05/2025</td>
              <td>Procter & Gamble Company</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Exxon Mobil Corporation</td>
              <td>Paga</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Berkshire Hathaway Inc.</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Coca-Cola Company</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Toyota Motor Corporation</td>
              <td>Paga</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Microsoft Corporation</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Amazon.com, Inc.</td>
              <td>Paga</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Tesla, Inc.</td>
              <td>Pendente</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Facebook, Inc.</td>
              <td>Paga</td>
            </tr>
            <tr>
              <td>67.478.090/0001-00</td>
              <td>05/2025</td>
              <td>Nakia Ribeiro do Nas...</td>
              <td>Pendente</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
