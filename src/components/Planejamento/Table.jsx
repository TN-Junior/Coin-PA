import React, { useState, useEffect } from 'react';
import './Table.css';

function Table() {
  const [filter, setFilter] = useState('');
  const [rows, setRows] = useState([]);

  // Função para buscar os dados da API
  useEffect(() => {
    fetch('/api/contas')  // Atualize a URL conforme o endpoint do seu backend
      .then(response => response.json())
      .then(data => setRows(data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  // Função para adicionar uma nova conta
  const handleAdicionar = () => {
    // Aqui, você pode abrir um modal ou popup para que o usuário insira as informações necessárias.
    const novaConta = {
      id: '00.000.000/0001-00',
      vencimento: '12/2025',
      empresa: 'Nova Empresa',
      status: 'Pendente'
    };

    fetch('/api/contas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(novaConta),
    })
      .then(response => response.json())
      .then(data => {
        setRows(prevRows => [...prevRows, data]);
      })
      .catch(error => console.error('Erro ao adicionar nova conta:', error));
  };

  // Filtragem dos dados
  const filteredRows = filter
    ? rows.filter(row => row.status === filter) // Filtra os dados com base no status selecionado
    : rows; // Se não houver filtro, exibe todos os dados

  return (
    <div className="empresa-page">
      <div className="empresa-header">
        <h2>Planejamento</h2>
        <div className="actions">
          <button className="btnAdicionar" onClick={handleAdicionar}>+</button>
          <button className="filtro" onClick={() => setFilter('Paga')}>Pagas</button>
          <button className="filtro" onClick={() => setFilter('Pendente')}>Pendentes</button>
          <button className="filtro" onClick={() => setFilter('')}>Todos</button>
        </div>
      </div>
      <div className="table-container">
        <table className="empresa-table">
          <thead>
            <tr className='Title'>
              <th>Data de Cadastro</th>
              <th>Conta</th>
              <th>Status</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th>Data de Vencimento</th>
              <th>Data de Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr key={index}>
                <td>{row.dataCadastro}</td>
                <td>{row.id}</td>
                <td>{row.status}</td>
                <td>{row.categoria}</td>
                <td>{row.valor}</td>
                <td>{row.datavencimento}</td>
                <td>{row.dataPagamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
