import React from 'react';

function CadEquipamento() {
  return (
    <section className="cad-equipamento">
      <div className="interface">
        <h1 className="titulo">CADASTRAR EQUIPAMENTO</h1>
        <div className="flex">
          <form action="#">
            <div className="nome-equipamento">
              <p>Nome do Equipamento</p>
              <input
                type="text"
                name="nome"
                className="nome"
                id="nome"
                placeholder="Nome"
                maxLength="30"
                required
              />
            </div>
            <div className="tipo-equipamento">
              <p>Tipo</p>
              <select className="tipo" id="tipo" name="tipo" required>
                <option value="">Selecione o tipo de equipamento</option>
                <option value="caminhao">Caminhão</option>
                <option value="escavadeira">Escavadeira</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="btn-equipamento">
              <button type="submit">Cadastrar Equipamento</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CadEquipamento;
