import React, { useState } from 'react';
import "../PlanoDeContas/planoContas.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from '../Header/Header';

const AccountPlan = () => {
    const [accounts, setAccounts] = useState([
        { conta: 'Telefone', status: 'Agendada', categoria: 'Receita', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Luz', status: 'Paga', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Agua', status: 'Vencida', categoria: 'Receita', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        // Outras contas...
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false); // Controla o estado do modal
    const [newAccount, setNewAccount] = useState({ conta: '', status: '', categoria: '', valor: '', vencimento: '' });

    // Função para adicionar uma nova conta
    const addAccount = () => {
        setAccounts([...accounts, newAccount]);
        setIsModalOpen(false); // Fechar o modal após adicionar
    };

    // Função para lidar com a alteração dos campos do formulário
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAccount({ ...newAccount, [name]: value });
    };

    return (
        <>
            <div className='ContainerGeral'>
                <Sidebar />
                <div className='ContainerPlanos'>
                    <Header />
                    <section className='plan-section'>
                        <div className="text-button">
                            <h2>Plano de Contas</h2>
                            <button onClick={() => setIsModalOpen(true)}>+</button>
                        </div>

                        <div className='table-content'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Conta</th>
                                        <th>Status</th>
                                        <th>Categoria</th>
                                        <th>Valor</th>
                                        <th>Vencimento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {accounts.map((account, index) => (
                                        <tr key={index}>
                                            <td>{account.conta}</td>
                                            <td className={`status ${account.status.toLowerCase()}`}>{account.status}</td>
                                            <td>{account.categoria}</td>
                                            <td>{account.valor}</td>
                                            <td>{account.vencimento}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>

            {/* Modal de Adição */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Adicionar Nova Conta</h3>

                        <label>Conta:</label>
                        <input type="text" name="conta" value={newAccount.conta} onChange={handleInputChange} />

                        <label>Status:</label>
                        <input type="text" name="status" value={newAccount.status} onChange={handleInputChange} />

                        <label>Categoria:</label>
                        <select name="categoria" value={newAccount.categoria} onChange={handleInputChange}>
                            <option value="">Selecione...</option>
                            <option value="Receita">Receita</option>
                            <option value="Despesa">Despesa</option>
                        </select>

                        <label>Valor:</label>
                        <input
                            type="number"
                            name="valor"
                            value={newAccount.valor}
                            onChange={handleInputChange}
                            step="0.01"
                            min="0"
                            placeholder="0.00"
                        />

                        <label>Vencimento:</label>
                        <input type="date" name="vencimento" value={newAccount.vencimento} onChange={handleInputChange} />

                        <div className="modal-actions">
                            <button onClick={addAccount}>Adicionar</button>
                            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AccountPlan;
