import React from 'react';

function Relatorios() {
  return (
    <section className="relatorios">
      <div className="interface">
        <h1 className="titulo">RELATÓRIOS</h1>
        <div className="flex">
          <div className="texto-relatorios">
            <p>Aqui estão alguns relatórios fictícios para demonstração:</p>
          </div>
          <div className="relatorio-operacao">
            <a href="#"><li>Relatório de Operação - Janeiro 2024</li></a>
            <a href="#"><li>Relatório de Operação - Fevereiro 2024</li></a>
            <a href="#"><li>Relatório de Operação - Março 2024</li></a>
          </div>
          <div className="btn-relatorio">
            <button type="submit">Gerar Relatório</button>
          </div>
        </div> {/* flex */}
      </div> {/* interface */}
    </section>
  );
}

export default Relatorios;
