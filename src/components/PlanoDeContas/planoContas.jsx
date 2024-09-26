import React from 'react';
import "../PlanoDeContas/planoContas.css";
import Sidebar from "../Sidebar/Sidebar"
import Header from '../Header/Header';

const AccountPlan = () => {

    const accounts = [
        { conta: 'Telefone', status: 'Agendada', categoria: 'Receita', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Luz', status: 'Paga', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Agua', status: 'Vencida', categoria: 'Receita', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Internet', status: 'Agendada', categoria: 'Receita', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Gás', status: 'Agendada', categoria: 'Receita', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Transporte', status: 'Agendada', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Aluguel', status: 'Agendada', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Terceirizados', status: 'Agendada', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Segurança', status: 'Agendada', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
        { conta: 'Rastreador', status: 'Agendada', categoria: 'Despesa', valor: 'R$ 1234,50', vencimento: '10-09-2014' },
    ];


    return (
        <> 
        <div className='ContainerGeral'>
        <Sidebar />
       
        <div className='ContainerPlanos'>
            <Header />
            <section className='plan-section'>
                <div className="text-button">
                    <h2>Plano de Contas</h2>
                    <button>+</button>
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
        </>
    )
}

export default AccountPlan;