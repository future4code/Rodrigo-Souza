import React , {Component} from "react";
import axios from "axios";
import "./pagLista.css"

class Lista extends React.Component {
    state = {
        cadastrados: []
    }

    componentDidMount() {
        this.paginaCadastro();
    }

    paginaCadastro = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users" ,
        {
            headers: {
                Authorization: "rodrigo-souza-epps"
            }
        }
        )    

        .then(response => {
            this.setState({cadastrados: response.data})
        }) .catch(error =>{
            console.log(error)
        })
    }

    confirmaDeletarUsuario = userID => {
        const del = window.confirm("Confirme para continuar com a remoção do usuário")
        if (del === true) {
            this.delUsuario(userID)
        } else {
            alert("Ação cancelada")
        }
    }

    delUsuario = userID => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}` ,
        {
            headers: {
                Authorization: "rodrigo-souza-epps"
            }
        }
    )
         .then(() => {
            alert("Dados removidos com sucesso")
            this.paginaCadastro()
        }).catch(error => {
            alert("Não foi possível apagar")
        })
    }

    botaoMudarPagina = () => {
        if (this.state.revelaEmail === "false"){
            this.setState({ revelaEmail: "true"})
        } else {
            this.setState({ revelaEmail: "false"})
        }
    }

    getId = userID => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}`,
    {
        headers: {
            Authorization: "rodrigo-souza-epps"
        }
    }
        )
        .then((response) => {
            console.log(response)
        })
    }

    render(){
        return (
        
        <ul>
            <div className="UsuariosCadastrados">Usuarios Cadastrados:</div>
            {this.state.cadastrados.length === 0 && <div className="aguarde">Não há dados salvos na lista!</div>}
        <div>
            {this.state.cadastrados.map(cadastros => {
                return(
                    <li key={cadastros.id}>
                        {cadastros.name}
                        <span onClick = {() => this.confirmaDeletarUsuario(cadastros.id)}>X</span>
                    </li>
                )
            })}
        </div>
        </ul>
        )
    }
}

export default Lista;