import React, { useState } from 'react';
import MenuLateral from './MenuLateral';
import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(true); // Estado para o menu lateral

  const toggleMenu = () => {
    setMenuAberto(!menuAberto); // Alterna entre aberto e fechado
  };

  return (
    <div className="App">
      <header>
        <div className="interface">
          <div className="logo">
            <a href="#">
              <img className="img-logo" src="./img/mineracao.png" alt="Logo" />
              <h1 className="img-logo">Monitor Mining</h1>
            </a>
          </div>
        </div>
      </header>
      <MenuLateral menuAberto={menuAberto} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;

