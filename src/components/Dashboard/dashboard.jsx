import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
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