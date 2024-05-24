import React from 'react';
import './Sidebar.css';
import Header from "../PlanoDeContas/Header"
import { Link } from 'react-router-dom';

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
                        <li><Link to="/Empresa">Empresas</Link></li>
                        <li className="active"><a href="/plano">Plano de Contas</a></li>
                        <li><a href="#pagamentos">Pagamentos</a></li>
                        <li><a href="#usuarios">Usuários</a></li>
                        <li><a href="#planejamento">Planejamento Financeiro</a></li>
                    </ul>
                </nav>
            </aside>

            
            
        </div>

    );
};

export default Sidebar;