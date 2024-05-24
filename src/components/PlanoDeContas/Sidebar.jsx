import React from 'react';
import './Sidebar.css';
import Header from "../PlanoDeContas/Header"

const Sidebar = () => {
    return (
        <div className='sidebar-content'>
            <aside className='sidebar'>
                <header>
                    <h1>coin</h1>
                </header>

                <nav>
                    <ul>
                        <li><a href="#dashboard">Dashboard</a></li>
                        <li><a href="#empresas">Empresas</a></li>
                        <li className="active"><a href="#planodecontas">Plano de Contas</a></li>
                        <li><a href="#pagamentos">Pagamentos</a></li>
                        <li><a href="#usuarios">Usuários</a></li>
                        <li><a href="#planejamento">Planejamento Financeiro</a></li>
                    </ul>
                </nav>
            </aside>

            <div className="header">
                <input type="text" placeholder="Pesquisar..." />
                <button>Fernanda F.</button>
            </div>
            
        </div>

    );
};

export default Sidebar;