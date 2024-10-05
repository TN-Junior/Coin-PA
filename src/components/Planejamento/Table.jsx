import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

function Table() {
  const [contas, setContas] = useState([]);
  const [novaConta, setNovaConta] = useState({
    conta: '',
    status: '',
    categoria: '',
    valor: 0.0,
    vencimento: '',
    pagamento: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [contaSelecionada, setContaSelecionada] = useState(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas'); // "Todas", "Despesas", "Receitas"

  useEffect(() => {
    carregarContas();
  }, []);

  const carregarContas = () => {
    axios.get('http://localhost:8080/api/contas')
      .then(response => setContas(response.data))
      .catch(error => console.error('Erro ao carregar contas', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovaConta({
      ...novaConta,
      [name]: value
    });
  };

  const adicionarOuEditarConta = () => {
    if (isEditing) {
      // Editar conta existente
      axios.put(`http://localhost:8080/api/contas/${editId}`, novaConta)
        .then(response => {
          setContas(contas.map(conta => (conta.id === editId ? response.data : conta)));
          resetForm();
        })
        .catch(error => console.error('Erro ao editar conta', error));
    } else {
      // Adicionar nova conta
      axios.post('http://localhost:8080/api/contas', novaConta)
        .then(response => {
          setContas([...contas, response.data]);
          resetForm();
        })
        .catch(error => console.error('Erro ao adicionar conta', error));
    }
  };

  const resetForm = () => {
    setNovaConta({ conta: '', status: '', categoria: '', valor: 0.0, vencimento: '', pagamento: '' });
    setShowModal(false);
    setIsEditing(false);
    setEditId(null);
    setContaSelecionada(null);
  };

  const editarConta = (conta) => {
    setNovaConta({
      conta: conta.conta,
      status: conta.status,
      categoria: conta.categoria,
      valor: conta.valor,
      vencimento: conta.vencimento,
      pagamento: conta.pagamento
    });
    setEditId(conta.id);
    setIsEditing(true);
    setShowModal(true);
  };

  const deletarConta = (id) => {
    axios.delete(`http://localhost:8080/api/contas/${id}`)
      .then(() => {
        setContas(contas.filter(conta => conta.id !== id));
        setContaSelecionada(null);
      })
      .catch(error => console.error('Erro ao deletar conta', error));
  };

  const selecionarConta = (conta) => {
    setContaSelecionada(conta);
  };

  const contasFiltradas = contas.filter(conta => {
    if (categoriaSelecionada === 'Todas') {
      return true;
    }
    return conta.categoria === categoriaSelecionada;
  });

  return (
    <div className="empresa-page">
      <div className="empresa-header">
        <h2>Planejamento</h2>
        <button className="add-button" onClick={() => setShowModal(true)}>+</button>
      </div>

      <div className="categoria-menu">
        <button
          className={`categoria-button ${categoriaSelecionada === 'Todas' ? 'active' : ''}`}
          onClick={() => setCategoriaSelecionada('Todas')}
        >
          Todas
        </button>
        <button
          className={`categoria-button ${categoriaSelecionada === 'Despesas' ? 'active' : ''}`}
          onClick={() => setCategoriaSelecionada('Despesas')}
        >
          Despesas
        </button>
        <button
          className={`categoria-button ${categoriaSelecionada === 'Receitas' ? 'active' : ''}`}
          onClick={() => setCategoriaSelecionada('Receitas')}
        >
          Receitas
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? "Editar Conta" : "Adicionar Nova Conta"}</h3>
            <input
              type="text"
              name="conta"
              placeholder="Conta (ex: 34.604.380/0001-95)"
              value={novaConta.conta}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="status"
              placeholder="Status (ex: Pendente)"
              value={novaConta.status}
              onChange={handleInputChange}
            />
            <select
              name="categoria"
              value={novaConta.categoria}
              onChange={handleInputChange}
            >
              <option value="">Selecione a Categoria</option>
              <option value="Despesas">Despesas</option>
              <option value="Receitas">Receitas</option>
            </select>
            <input
              type="number"
              name="valor"
              placeholder="Valor (ex: 1000.50)"
              value={novaConta.valor}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="vencimento"
              placeholder="Vencimento"
              value={novaConta.vencimento}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="pagamento"
              placeholder="Data de Pagamento"
              value={novaConta.pagamento}
              onChange={handleInputChange}
            />
            <div className="modal-actions">
              <button className="save-button" onClick={adicionarOuEditarConta}>{isEditing ? "Salvar Alterações" : "Adicionar"}</button>
              <button className="cancel-button" onClick={resetForm}>Cancelar</button>
            </div>
          </div>
        </div>
      )}

      <div className="table-container">
        <table className="empresa-table">
          <thead>
            <tr className='Title'>
              <th>Conta</th>
              <th>Status</th>
              <th>Categoria</th>
              <th>Valor</th>
              <th>Vencimento</th>
              <th>Data de Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {contasFiltradas.map((conta) => (
              <tr key={conta.id} onClick={() => selecionarConta(conta)} className={contaSelecionada?.id === conta.id ? 'selected' : ''}>
                <td>{conta.conta}</td>
                <td>{conta.status}</td>
                <td>{conta.categoria}</td>
                <td>{conta.valor}</td>
                <td>{conta.vencimento}</td>
                <td>{conta.pagamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {contaSelecionada && (
        <div className="actions-container">
          <button className="edit-button" onClick={() => editarConta(contaSelecionada)}>
            <FontAwesomeIcon icon={faEdit} /> Editar
          </button>
          <button className="delete-button" onClick={() => deletarConta(contaSelecionada.id)}>
            <FontAwesomeIcon icon={faTrash} /> Deletar
          </button>
        </div>
      )}
    </div>
  );
}

export default Table;
