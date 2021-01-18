import React from "react";
import styled from "styled-components";
import axios from "axios";

const Div1 = styled.div `
    background-color: lightblue;
    width: 100%;
    height: 50vh;
    text-align:center;
    justify-content:center;
    align-items:center;
    display:flex;
    border: 1px black solid;
    flex-direction:column;`

class CriarPL extends React.Component {
  state = {
    nameValue: ""
  }

  createPlaylist = () => {
      const body = {
          name: this.state.nameValue
      }
      axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body,  {
          headers: {
              Authorization: "rodrigo-souza-epps"
          }
      }).then((response) => {
          alert(`Playlist ${this.state.nameValue} criada!`)
          this.setState({nameValue: ""})
      }).catch((error) => {
          alert(`A playlist ${this.state.nameValue} já existe!.`)
          console.log(error.message)
      })
  }

  onChangeNameValue = (event) => {
    this.setState({nameValue: event.target.value})
  }

  render() {
      
    return (
      <Div1>
        <label>Nome da Playlist:</label>
        <input value={this.state.nameValue} onChange={this.onChangeNameValue}></input>
        <button onClick={this.createPlaylist}>Criar Playlist</button>
      </Div1>
      
    );
  }
}

export default CriarPL;