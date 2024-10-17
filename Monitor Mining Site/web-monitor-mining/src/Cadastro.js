import React from 'react';

function Cadastro({ onCadAcaoClick, onCadEquipamentoClick, onCadOperadorClick }) {
  return (
    <section className="cadastro">
      <div className="interface">
        <h1 className="titulo">CADASTRO</h1>
        <div className="flex">
          <div className="texto-cadastro">
            <p>O que deseja cadastrar?</p>
          </div>
          <div className="opcoes-cadastro">
            <a href="#" onClick={onCadAcaoClick}>
              <ul>Cadastrar Nova Ação</ul>
            </a>
            <a href="#" onClick={onCadEquipamentoClick}>
              <ul>Cadastrar Equipamento</ul>
            </a>
            <a href="#" onClick={onCadOperadorClick}>
              <ul>Cadastrar Operador</ul>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cadastro;
