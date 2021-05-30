import React from 'react'
import imagem from '../assets/img/icos/book.png'
const Conteudo = () => {

  return (
    <main>
      <div className="container">
        <div className="bloco">
        <hr/>
          <div className="book-infor">
            <img className="book-image" src={imagem} alt="book"/>
            <p>teste</p>
          </div>
        <hr/>
        </div>
      </div>
    </main>
  )
}

export default Conteudo
