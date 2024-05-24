import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PlanoContas from './components/PlanoDeContas/planoContas';
import Sidebar from './components/PlanoDeContas/Sidebar';
import Header from './components/PlanoDeContas/Header';
import Empresa from './components/Empresa/Empresa'


function Main(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/plano' element={<PlanoContas />}/>
            <Route path='/plano' element={<Sidebar />} />
            <Route path='/plano' element={<Header />}/>
            <Route path='/Empresa' element={<Empresa />}/>
            </Routes>
        </Router>
    )
}
export default Main;