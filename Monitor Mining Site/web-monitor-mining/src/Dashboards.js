import React from 'react';

function Dashboards() {
  return (
    <section className="dashboards">
      <div className="interface">
        <h1 className="titulo">DASHBOARD</h1>
        <div className="flex">
          <div className="cartoes">
            <h2>DF - Disponibilidade Física</h2>
            <div className="conteudo-dashboard"></div>
          </div>
          <div className="cartoes">
            <h2>UT - Utilização</h2>
            <div className="conteudo-dashboard"></div>
          </div>
          <div className="cartoes">
            <h2>Produtividade de Equipamentos</h2>
            <div className="conteudo-dashboard"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboards;
