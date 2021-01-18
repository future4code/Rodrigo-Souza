import React from "react";
import axios from "axios"
import { isCompositeComponent } from "react-dom/test-utils";
import "./App.css"

export default class App extends React.Component {

  state = {
    activity: "",
    type: "",
    participants: "",
    price: "",
    acessibility: ""
    
  }

  getActivity = async () => {
    try {
      const response = await axios.get("http://www.boredapi.com/api/activity/")
      this.setState({
        activity: response.data.activity,
        type: response.data.type,
        participants: response.data.participants,
        price: response.data.price,
        accessibility: response.data.accessibility
      })
    } catch(err) {
      console.log(err)
  }
  
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>BoredApi</h1>
        <h2>Não tem nada para fazer?</h2>
        <button onClick={this.getActivity}>Vá fazer algo, clique aqui!</button>
        <hr></hr>
        <p>Tarefa: {this.state.activity} </p>
        <hr></hr>
        <p>Tipo: {this.state.type} </p>
        <hr></hr>
        <p>Participantes: {this.state.participants} </p>
        <hr></hr>
        <p>Preço: {this.state.price} </p>
        <hr></hr>
        <p>Acessibilidade: {this.state.accessibility} </p>
      </div>
    )
  }
}