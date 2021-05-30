import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './paginas/Login'
import Conteudo from './paginas/Conteudo'
import MaterialApoio from './paginas/MaterialApoio'
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/conteudo'>
          <Conteudo />
        </Route>
        <Route path='/material_apoio/'>
          <MaterialApoio />
        </Route>
        <Route path='/posts/:id'>
          <Post />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
