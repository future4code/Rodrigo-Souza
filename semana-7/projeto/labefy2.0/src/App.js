import React from "react";
import './App.css';
import styled from "styled-components";
import axios from "axios";
import CriarPL from "./components/CriarPL"
import VerPL from "./components/VerPL"
import Header from "./components/Header"
import Footer from "./components/Footer"


const Div3 = styled.div `
    background-color: lightblue;
    width: 100%;
    height: 90vh;
    text-align:center;
    justify-content:center;
    align-items:center;
    display:flex;
    border: 1px black solid;
    flex-direction:column;`



class App extends React.Component {
  state = {
    createPage: true
  }

  changePage = () => {
    this.setState({createPage: !this.state.createPage})
  }
  
  render() {
    const currentPage = this.state.createPage ? (<CriarPL/>) : (<VerPL/>)

    return (
      <div>
        <Header />
        <Div3>
        {currentPage}
        <button onClick={this.changePage}>Trocar de Página</button>
        </Div3>
        <Footer />
      </div>
      
    );
  }
}

export default App;
