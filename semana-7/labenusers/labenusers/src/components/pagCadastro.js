import React , {Component} from "react";
import axios from "axios";

class Registro extends Component {

    state = {
        nomeUsuario: "",
        emailUsuario: ""
    }

    criaUsuario = () => {
        const body = {
            name: this.state.nomeUsuario,
            email: this.state.emailUsuario
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" ,body,

        {
            headers: {
                Authorization: "rodrigo-souza-epps"
            }
        }
        )

        .then(response => {
            window.alert("Todos os seus dados foram enviados para a lista/banco de dados com sucesso!")
            this.setState({nomeUsuario: ""})
            this.setState({emailUsuario: ""})
        }).catch(error => {
            window.alert("Ocorreu algum erro, tente novamente")
        })
    }

    manipulaNome = event => {
        this.setState({nomeUsuario: event.target.value})
    }

    manipulaEmail = event => {
        this.setState({emailUsuario: event.target.value})
    }


    render(){
        return(
            <div>
                <h3>Nome:</h3>
                    <input
                     value={this.state.nomeUsuario}
                     onChange={this.manipulaNome}
                />
                <h3>E-mail:</h3>
                    <input
                    value={this.state.emailUsuario}
                    onChange={this.manipulaEmail}
                    />
                <button className="salvar" onClick={this.criaUsuario}>Salvar</button>
            </div>
        )
    }
}

export default Registro;

