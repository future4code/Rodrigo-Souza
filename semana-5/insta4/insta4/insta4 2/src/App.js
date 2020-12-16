import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import SecaoComentario from "./components/SecaoComentario/SecaoComentario"
import IconeSalvar from "./components/IconeSalvar/IconeSalvar"
import IconeComContador from "./components/IconeComContador/IconeComContador"

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?a=1'}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />
        <Post
          nomeUsuario={'Rodrigo'}
          fotoUsuario={'https://picsum.photos/50/50?a=2'}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />
         <Post
          nomeUsuario={'Aline'}
          fotoUsuario={'https://picsum.photos/50/50?a=3'}
          fotoPost={'https://picsum.photos/200/150?a=3'}
          />
      </div>
    );
  }
}

export default App;
