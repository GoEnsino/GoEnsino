import React from 'react'
import imagem from '../assets/img/icos/book.png'
import { Link } from "react-router-dom";
const Conteudo = () => {

  return (
    <main>
      <div className="imgcontainer">
        <img src="https://static.imasters.com.br/wp-content/uploads/2019/08/20134733/isacmoura.jpg.jpg" alt="Avatar" className="imgprofile"></img>
        <div className="student">
          <h1 className="name">Isac Moura</h1>
          <h2 className="school">EEEP Maria Dolores Alcântara e Silva</h2>
        </div>
      </div>
      <div className="container">
        <div className="bloco">
        <hr/>
        <Link to="/material_apoio"> 
          <div className="book-infor">
            <img className="book-image" src={imagem} alt="book"/>
            <p>Matemática</p>
            <p className="book-pont" >37 pontos</p>
          </div>
        </Link>
        <hr/>
          <div className="book-infor">
            <img className="book-image" src={imagem} alt="book"/>
            <p>Português</p>
            <p className="book-pont" >60 pontos</p>
          </div>
        <hr/>

        <div className="book-infor">
            <img className="book-image" src={imagem} alt="book"/>
            <p>Biologia</p>
            <p className="book-pont" >65 pontos</p>
          </div>
        <hr/>
        </div>
      </div>
    </main>
  )
}

export default Conteudo
