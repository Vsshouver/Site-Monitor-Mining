import React, { useState } from 'react';
import Login from './Login';
import MenuLateral from './MenuLateral';
import Dashboards from './Dashboards';
import Relatorios from './Relatorios';
import Cadastro from './Cadastro';
import CadAcao from './CadAcao';
import CadEquipamento from './CadEquipamento';
import CadOperador from './CadOperador';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado para verificar se o usuário está logado
  const [menuAberto, setMenuAberto] = useState(true);
  const [dashboardVisible, setDashboardVisible] = useState(true);
  const [relatoriosVisible, setRelatoriosVisible] = useState(false);
  const [cadastroVisible, setCadastroVisible] = useState(false);
  const [cadAcaoVisible, setCadAcaoVisible] = useState(false);
  const [cadEquipamentoVisible, setCadEquipamentoVisible] = useState(false);
  const [cadOperadorVisible, setCadOperadorVisible] = useState(false);

  // Função de autenticação (simulação de login)
  const handleLogin = (username, password) => {
    if (username === 'admin' && password === '12345') { // Exemplo de credenciais
      setIsAuthenticated(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };
  
  // Condição para exibir a tela de login antes de carregar o site
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

   // Função de logout
  const handleLogout = () => {
    setIsAuthenticated(false); // Redefine a autenticação
  };

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const handleDashboardClick = () => {
    setDashboardVisible(true);
    setRelatoriosVisible(false);
    setCadastroVisible(false);
    setCadAcaoVisible(false);
    setCadEquipamentoVisible(false);
    setCadOperadorVisible(false);
  };

  const handleRelatoriosClick = () => {
    setRelatoriosVisible(true);
    setDashboardVisible(false);
    setCadastroVisible(false);
    setCadAcaoVisible(false);
    setCadEquipamentoVisible(false);
    setCadOperadorVisible(false);
  };

  const handleCadastroClick = () => {
    setCadastroVisible(true);
    setDashboardVisible(false);
    setRelatoriosVisible(false);
    setCadAcaoVisible(false);
    setCadEquipamentoVisible(false);
    setCadOperadorVisible(false);
  };

  const handleCadAcaoClick = () => {
    setCadAcaoVisible(true);
    setCadastroVisible(false);
    setDashboardVisible(false);
    setRelatoriosVisible(false);
    setCadEquipamentoVisible(false);
    setCadOperadorVisible(false);
  };

  const handleCadEquipamentoClick = () => {
    setCadEquipamentoVisible(true);
    setCadastroVisible(false);
    setDashboardVisible(false);
    setRelatoriosVisible(false);
    setCadAcaoVisible(false);
    setCadOperadorVisible(false);
  };

  const handleCadOperadorClick = () => {
    setCadOperadorVisible(true);
    setCadastroVisible(false);
    setDashboardVisible(false);
    setRelatoriosVisible(false);
    setCadAcaoVisible(false);
    setCadEquipamentoVisible(false);
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
      <MenuLateral
        menuAberto={menuAberto}
        toggleMenu={toggleMenu}
        onDashboardClick={handleDashboardClick}
        onRelatoriosClick={handleRelatoriosClick}
        onCadastroClick={handleCadastroClick}
        onLogout={handleLogout}
      />
      {dashboardVisible && <Dashboards />}
      {relatoriosVisible && <Relatorios />}
      {cadastroVisible && (
        <Cadastro
          onCadAcaoClick={handleCadAcaoClick}
          onCadEquipamentoClick={handleCadEquipamentoClick}
          onCadOperadorClick={handleCadOperadorClick}
        />
      )}
      {cadAcaoVisible && <CadAcao />}
      {cadEquipamentoVisible && <CadEquipamento />}
      {cadOperadorVisible && <CadOperador />}
    </div>
  );
}

export default App;
