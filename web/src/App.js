import React from 'react';

import './global.css'
import './App.css'
import './sidebar.css'
function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>

        </ul>
      </main>
    </div>
  );
}

export default App;



//Componente: bloco isolado de html, css e js, no qual não interfere no resultado da aplicação
//Propriedade : informações que um compnente PAI passa para o componente FILHO
//Estado: Informações mantida pelo componente(usando o conseito de imutabilidade)
