import React from 'react';

function MenuLateral({ menuAberto, toggleMenu }) {
  return (
    <>
      {}
      <section className={`menu-lateral ${menuAberto ? 'aberto' : 'fechado'}`}>
        <div className="interface">
        <button className={`toggle-btn ${menuAberto ? 'expandir' : 'recolher'}`} onClick={toggleMenu}>
        {menuAberto ? 'Recolher' : 'Menu'}
      </button>
          <div className="flex">
            <nav className="menu">
              <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Relatórios</a></li>
                <li><a href="#">Cadastro</a></li>
                <li><a href="#">Configurações</a></li>
                <li><a href="#">Sair</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuLateral;

