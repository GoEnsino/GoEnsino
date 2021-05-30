import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => { 
  return(
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          {/* <h1 className="cabecalho__titulo">tesste</h1> */}
        </Link>
      </div>

      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default Cabecalho