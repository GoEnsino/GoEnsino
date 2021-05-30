import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  return (
    <main className="main">
      <div className="imgcontainer">
        <img src={process.env.PUBLIC_URL + '/logo-goensino.png'} alt="Avatar" className="avatar"></img>
      </div>

      <div className="container">
        <Form>
          <div className="bloco">
            <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="aluno@escola.com.br" name="uname" required></input>

            <label for="psw"><b>Senha</b></label>
            <input type="password" placeholder="Insira sua senha" name="psw" required></input>
                
            <Link to="/conteudo"> 
              <Button block size="lg" type="submit">
                Login
              </Button>
            </Link>

            <Button block size="lg" className="register" type="submit">
              Cadastrar-se
            </Button>
          </div>
        </Form>
      </div>
    </main>
  );
}

export default Home
