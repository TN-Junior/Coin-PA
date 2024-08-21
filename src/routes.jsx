import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Signup from './components/Signup/Signup';  // Importando o componente de cadastro
import PlanoContas from './components/PlanoDeContas/planoContas';
import Sidebar from './components/PlanoDeContas/Sidebar';
import Header from './components/PlanoDeContas/Header';
import Empresa from './components/Empresa/Empresa';
import Dashboard from './components/Dashboard/dashboard';

function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<Signup />} />  {/* Adicionando a rota para o cadastro */}

                {/* Agrupando Header, Sidebar e PlanoContas para a rota '/plano' */}
                <Route
                    path="/plano"
                    element={
                        <>
                            <Header />
                            <Sidebar />
                            <PlanoContas />
                        </>
                    }
                />

                <Route path="/empresa" element={<Empresa />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default Main;
