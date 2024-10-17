import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(username, password); // Chama a função de login do App.js
  };

  return (
    <section className="login">
      <div id="login-container" className="login-container">
        <div className="logo-login">
          <img src="Img/mineracao.png" alt="Monitor Mining Logo" />
          <h1>Monitor Mining</h1>
        </div>
        <form id="loginForm" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" id="botao-login">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Login;