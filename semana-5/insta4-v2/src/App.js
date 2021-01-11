import React from 'react';
import styled from 'styled-components';

import Header from './Components/Header/Header';
import FormularioPost from './Components/FormularioPost/FormularioPost';
import Post from './Components/Post/Post';

const Container = styled.div`
  background-color: white;
  color: black;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`

const MainEstilo = styled.div`
  margin-top: 5vh;
  padding: 0.8vh 0.8vw;
  min-height: 90vh;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      posts: []

    }
  }

  onCriaPost = ({autor, imagemPerfil, imagemPost}) => {

    if(autor && imagemPerfil && imagemPost ) {
      const maisUmPost = {
        imagemPerfil: imagemPerfil,
        autor: autor,
        imagemPost: imagemPost
      }
  
      this.setState({
        posts: [maisUmPost,...this.state.posts]
      })
    } else {
      alert('Preencha todos os campos para Postar')
    }    

  }

  render() {

    let listaDePost = this.state.posts.map((cadapost, index) => {
      return (<Post
        key={index}
        imagemPerfil={cadapost.imagemPerfil}
        autor={cadapost.autor}
        imagemPost={cadapost.imagemPost}
      />)
    })

    return (

      <Container>

        <Header />

        <MainEstilo>
          <FormularioPost onCriaPost={this.onCriaPost} />
          {listaDePost}
        </MainEstilo>

      </Container>

    )
  }
}

export default App;
