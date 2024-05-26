import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Home from './components/Home'

import Login from './components/Login/login';
//import Cadastro from './components/Cadastro/Cadastro';
import PlanoContas from './components/PlanoDeContas/planoContas';
import Sidebar from './components/PlanoDeContas/Sidebar';
import Header from './components/PlanoDeContas/Header';
import Empresa from './components/Empresa/Empresa'
import Dashboard from './components/Dashboard/dashboard'


function Main(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            
            <Route path='/plano' element={<PlanoContas />}/>
            <Route path='/plano' element={<Sidebar />} />
            <Route path='/plano' element={<Header />}/>
            <Route path='/empresa' element={<Empresa />}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
        </Router>
    )
}
export default Main;