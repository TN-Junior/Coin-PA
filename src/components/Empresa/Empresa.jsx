import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import './Empresa.css'
import Table from './Table'

const Empresa = () => {
  return (
    <>
    <div className='ContainerEmpresa'>
    <Header />
        
        <div className='segundoContainer'>
        <Sidebar />
        
          <Table />
        </div>
        
    </div>
        
       
        
    </>
  )
}

export default Empresa