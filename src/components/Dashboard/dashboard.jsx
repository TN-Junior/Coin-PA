import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import Datadisplay from './datadisplay'
import './dashboard.css'


const Dashboard = () => {
  return (
    <>
    <div className='ContainerEmpresa'>
      <Header />
    
        <div className='segundoContainer'>
        <Sidebar />
          <Datadisplay/>
        </div>
        
    </div>
        
       
        
    </>
  )
}

export default Dashboard