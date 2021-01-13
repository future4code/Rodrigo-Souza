import React from "react";
import axios from "axios";
import "./App.css";

import Registro from "./components/pagCadastro";
import Lista from "./components/pagLista";



class App extends React.Component { 
    state = {
      tela: "cadastro"
    }
  

  paginaCadastro = () => {
    axios.get(" https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization: "rodrigo-souza-epps"
      }
    }
  )

    .then(response => {
      this.setState({cadastrados: response.data})
    }).catch(error => {
      console.log(error)
    })
  }

  botaoMudarPagina = () => {
    if (this.state.tela === "cadastro") {
      this.setState ({ tela: "lista"})
    } else {
      this.setState({ tela: "cadastro"})
    }
  }

  render () {
    return (
      <div className="main">
        <div className="btn">
          <button onClick={this.botaoMudarPagina}>Trocar de Página</button>
        </div>
    

        {this.state.tela === "cadastro" ?
        (<div className="form">
          <Registro/>
        </div>) :

        (<div>
          <Lista/>
        </div>)}
      </div>
    )
  }
}

export default App;