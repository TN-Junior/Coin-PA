import React from 'react'
import Sidebar from '../PlanoDeContas/Sidebar'
import Header from '../PlanoDeContas/Header'
import Datadisplay from './datadisplay'


const Dashboard = () => {
  return (
    <>
    <div className='ContainerEmpresa'>
        <Sidebar />
        <div>
          <Header />
          <Datadisplay/>
        </div>
        
    </div>
        
       
        
    </>
  )
}

export default Dashboard