import React, { useState } from 'react';
import './Table.css';

function Table() {
  const [filter, setFilter] = useState('');

  const rows = [
    { id: '34.604.380/0001-95', vencimento: '05/2025', empresa: 'Procter & Gamble Company', status: 'Pendente' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Exxon Mobil Corporation', status: 'Paga' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Berkshire Hathaway Inc.', status: 'Pendente' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Coca-Cola Company', status: 'Pendente' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Toyota Motor Corporation', status: 'Paga' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Microsoft Corporation', status: 'Pendente' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Amazon.com, Inc.', status: 'Paga' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Tesla, Inc.', status: 'Pendente' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Facebook, Inc.', status: 'Paga' },
    { id: '67.478.090/0001-00', vencimento: '05/2025', empresa: 'Nakia Ribeiro do Nas...', status: 'Pendente' },
  ];

  const filteredRows = filter
    ? rows.filter(row => row.status === filter) // Filtra os dados com base no status selecionado
    : rows; // Se não houver filtro, exibe todos os dados

  return (
    <div className="empresa-page">
      <div className="empresa-header">
        <h2>Planejamento</h2>
        <div className="actions">
          <button className="btnAdicionar">+</button>
          <button class="filtro" onClick={() => setFilter('Paga')}> Pagas</button>
          <button class="filtro" onClick={() => setFilter('Pendente')}> Pendentes</button>
          <button class="filtro" onClick={() => setFilter('')}> Todos</button>
        </div>
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
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.vencimento}</td>
                <td>{row.empresa}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
