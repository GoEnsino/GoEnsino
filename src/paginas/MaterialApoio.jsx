import React from 'react'
import arrow_back from '../assets/img/icos/arrow_back.png'
import google_forms from '../assets/img/google-forms.png'
import numeros_complexos from '../assets/img/numeros-complexos.png'
import sinapse_podcast from '../assets/img/sinapse-podcast.png'

const Home = () => {

  const history = useHistory();

  return (
    <main>
      <img className="image-arrow-back" src={arrow_back} alt="book" onClick={history.pop()}/> 
      <div className="container">
          <div className="bloco student">
            <h1 className="name"> Plano de estudo personalizado - Matemática</h1>
          
            <p>34 conteúdos encontrados</p>
            <hr/>
            <a href="https://www.youtube.com/watch?v=AAXPJpfRwxw" target="_blank">
              <img className="conteudo-image" src={numeros_complexos} alt="book"></img> 
            </a>
            <a href="https://anchor.fm/sinapse/episodes/Sinapse-19---A-Matemtica-Foi-Descoberta-ou-Inventada-e5efct" target="_blank">
              <img className="conteudo-image" src={sinapse_podcast} alt="book"></img>
            </a>
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
