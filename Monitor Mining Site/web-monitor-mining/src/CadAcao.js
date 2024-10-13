import React from 'react';

function CadAcao() {
  return (
    <section className="cad-acao">
      <div className="interface" id="interface">
        <h1 className="titulo" id="titulo">CADASTRAR NOVA AÇÃO</h1>
        <div className="flex" id="flex">
          <form action="#">
            <div className="tipo-acao" id="tipo-acao">
              <p>Qual tipo ação deseja cadastrar?</p>
              <select className="tipo-acao" id="tipo-acao" name="tipo-acao" required>
                <option value="">Selecione o tipo de ação</option>
                <option value="rota">Nova rota</option>
                <option value="escavacao">Nova escavação</option>
                <option value="parada">Parada</option>
              </select>
            </div>

            <div className="nome-acao" id="nome-acao">
              <p>Nome</p>
              <input
                type="text"
                name="acao"
                className="acao"
                id="acao"
                placeholder="Digite o nome da ação"
                maxLength="30"
                required
              />
            </div>

            <div className="local-acao" id="local-acao">
              <p>Local</p>
              <input
                type="text"
                name="local"
                className="local"
                id="local"
                placeholder="Local da ação"
                maxLength="50"
                required
              />
            </div>

            <div className="descricao-acao" id="descricao-acao">
              <p>Descrição da Ação (opcional)</p>
              <textarea
                name="desc-acao"
                className="desc-acao"
                id="desc-acao"
                placeholder="Descrição..."
                maxLength="150"
              />
            </div>

            <div className="btn-acao" id="btn-acao">
              <button type="submit">Cadastrar ação</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CadAcao;
