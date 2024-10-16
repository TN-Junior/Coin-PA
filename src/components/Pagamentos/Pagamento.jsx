import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './Pagamento.css';

const Pagamentos = () => {
  const [isReceitas, setIsReceitas] = useState(true);

  const toggleReceitasDespesas = () => {
    setIsReceitas(!isReceitas);
  };

  return (
    <>
      <div className='ContainerEmpresa'>
        <Header />
        <div className='segundoContainer'>
          <Sidebar />

          
          <div className='content'>
            {/* Switch visual em forma de botão */}
            <div className= 'Pagamento'>
            <h2>Pagamentos</h2>
            </div>
            <div className='toggle-container'>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={isReceitas} 
                  onChange={toggleReceitasDespesas} 
                />
                <span className="slider"></span>
              </label>
              <span>{isReceitas ? 'Receitas' : 'Despesas'}</span>
            </div>
            {/* Renderiza a tabela com base no estado */}
            <div className='table-container'>
              {isReceitas ? (
                <TabelaReceitas />
              ) : (
                <TabelaDespesas />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TabelaReceitas = () => {
  return (
    <table className='styled-table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Serviços prestados</td>
          <td>R$ 500,00</td>
          <td>08/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
        <tr>
          <td>Venda de produtos</td>
          <td>R$ 1.000,00</td>
          <td>10/10/2024</td>
        </tr>
      </tbody>
    </table>
  );
};

const TabelaDespesas = () => {
  return (
    <table className='styled-table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Compra de materiais</td>
          <td>R$ 300,00</td>
          <td>11/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>
        <tr>
          <td>Pagamento de serviços</td>
          <td>R$ 150,00</td>
          <td>09/10/2024</td>
        </tr>

      </tbody>
    </table>
  );
};

export default Pagamentos;
