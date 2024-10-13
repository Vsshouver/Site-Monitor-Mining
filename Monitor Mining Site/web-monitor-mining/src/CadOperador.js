import React from 'react';

function CadOperador() {
  return (
    <section className="cad-operador">
      <div className="interface">
        <h1 className="titulo">CADASTRAR OPERADOR</h1>
        <div className="flex">
          <form action="#">
            <div className="equipamento-hab">
              <p>Equipamento(s) Habilitado(s)</p>
              <select className="eqp-hab" id="eqp-hab" name="eqp-hab" required>
                <option value="">Selecione o equipamento a ser habilitado</option>
                <option value="caminhao">Caminhão</option>
                <option value="escavadeira">Escavadeira</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div className="nome-completo">
              <p>Nome Completo</p>
              <input
                type="text"
                name="nome"
                className="nome"
                id="nome"
                placeholder="Nome Completo"
                maxLength="40"
                required
              />
            </div>

            <div className="cpf-usuario">
              <p>Matrícula</p>
              <input
                type="tel"
                name="matricula"
                className="matricula"
                id="matricula"
                placeholder="Número da matrícula"
                inputMode="numeric"
                maxLength="15"
                required
              />
            </div>

            <div className="username">
              <p>Nome de Usuário</p>
              <input
                type="text"
                name="user"
                className="user"
                id="user"
                placeholder="Nome de Usuário"
                maxLength="30"
                required
              />
            </div>

            <div className="email-usuario">
              <p>E-mail</p>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Digite um e-mail válido"
                maxLength="50"
                required
              />
            </div>

            <div className="senha-usuario">
              <p>Senha</p>
              <input
                type="password"
                name="senha"
                className="senha"
                id="senha"
                placeholder="Digite uma senha"
                maxLength="20"
                required
              />
            </div>

            <div className="btn-operador">
              <button type="submit">Cadastrar Operador</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CadOperador;
