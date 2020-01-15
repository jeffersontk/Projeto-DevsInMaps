import React, { useState, useEffect } from 'react';

import './global.css'
import './App.css'
import './sidebar.css'
import './main.css'

function App() {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [github_username, setGithub_username] = useState('')
  const [techs, setTechs] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords

        setLatitude(latitude)
        setLongitude(longitude)
      },
      (err) => {
        console.log(err)
      }, {
      timeout: 30000,
    })

  }, [])

  async function handleAddDev(e) {
    e.preventDefault();

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithub_username(e.target.value)}></input>
          </div>
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}></input>
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              ></input>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              ></input>
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/46037459?s=460&v=4" alt="Jefferson Brito"></img>
              <div className="user-info">
                <strong>Jefferson Brito</strong>
                <span> ReactJS , React Native, Node.js</span>
              </div>
            </header>
            <p>estudante de analise e desenvolvimento de sistemas, com meta de se tornar um desenvolvedor full-stack</p>
            <a href="https://github.com/jeffersontk"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/46037459?s=460&v=4" alt="Jefferson Brito"></img>
              <div className="user-info">
                <strong>Jefferson Brito</strong>
                <span> ReactJS , React Native, Node.js</span>
              </div>
            </header>
            <p>estudante de analise e desenvolvimento de sistemas, com meta de se tornar um desenvolvedor full-stack</p>
            <a href="https://github.com/jeffersontk"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/46037459?s=460&v=4" alt="Jefferson Brito"></img>
              <div className="user-info">
                <strong>Jefferson Brito</strong>
                <span> ReactJS , React Native, Node.js</span>
              </div>
            </header>
            <p>estudante de analise e desenvolvimento de sistemas, com meta de se tornar um desenvolvedor full-stack</p>
            <a href="https://github.com/jeffersontk"> Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/46037459?s=460&v=4" alt="Jefferson Brito"></img>
              <div className="user-info">
                <strong>Jefferson Brito</strong>
                <span> ReactJS , React Native, Node.js</span>
              </div>
            </header>
            <p>estudante de analise e desenvolvimento de sistemas, com meta de se tornar um desenvolvedor full-stack</p>
            <a href="https://github.com/jeffersontk"> Acessar perfil no Github</a>
          </li>

        </ul>
      </main>
    </div>
  );
}

export default App;



//Componente: bloco isolado de html, css e js, no qual não interfere no resultado da aplicação
//Propriedade : informações que um compnente PAI passa para o componente FILHO
//Estado: Informações mantida pelo componente(usando o conseito de imutabilidade)
