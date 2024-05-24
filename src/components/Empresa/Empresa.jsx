import React from 'react'
import Sidebar from '../PlanoDeContas/Sidebar'
import Header from '../PlanoDeContas/Header'
import './Empresa.css'
import Table from './Table'

const Empresa = () => {
  return (
    <>
    <div className='ContainerEmpresa'>
        <Sidebar />
        <div>
          <Header />
          <Table />
        </div>
        
    </div>
        
       
        
    </>
  )
}

export default Empresa