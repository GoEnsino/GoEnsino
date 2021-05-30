import React from 'react'
import arrow_back from '../assets/img/icos/arrow_back.png'
import google_forms from '../assets/img/google-forms.png'
import numeros_complexos from '../assets/img/numeros-complexos.png'
import sinapse_podcast from '../assets/img/sinapse-podcast.png'


const Home = () => {

  return (
    <main>
      <div className="container">
          <div className="bloco student">
            <h1 className="name"> Plano de estudo personalizado - Matemática</h1>
          
            <p>34 conteúdos encontrados</p>
            <hr/>
            <img className="conteudo-image" src={numeros_complexos} alt="book"/> 
            <img className="conteudo-image" src={sinapse_podcast} alt="book"/> 
            <div className=" conteudo-atividades">
              <img className="conteudo-form" src={google_forms} alt="book"/> 
              <p  className="atividades-infor"> <a href="">Atividades Recomendadas</a></p>
            </div>
          </div>
      </div>
     
    </main>
    
  )
}

export default Home
