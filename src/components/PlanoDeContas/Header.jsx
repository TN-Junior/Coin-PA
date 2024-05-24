import React from 'react';
import './Header.css'; // Estilo separado para o header

const Header = () => {
    return (
        <div className="header">
            <input type="text" placeholder="Pesquisar..." />
            <div className="user-info">
                <button>Fernanda F.</button>
            </div>
        </div>
    );
};

export default Header;