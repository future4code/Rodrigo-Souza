import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

import {SecaoComentario} from '../SecaoComentario/SecaoComentario'

import {IconeSalvar} from "../../components/IconeSalvar/IconeSalvar"
import iconeSalvarBranco from "../../img/disquete_branco.svg"
import iconeSalvarPreto from "../../img/disquete_preto.svg"


class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  onClickCurtida = () => {
    console.log('Curtiu!')
    this.setState({
      curtido: true,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }


  clicouNoComentar = () => {
    this.setState({
        comentario: true
    })
}

apareceComentario = () => {
    if (this.state.comentario) {
        return (
            <div className='escrever-comentario'>
                <input placeholder='Escreva seu comentário' onChange={this.conteudoInput} value={ this.state.meucomentario }></input>
                <button onClick={this.jaComentou}>Enviar</button>
            </div>
        )
    }
}

conteudoInput = (event) => {
    this.setState({
        meucomentario: event.target.value
    })
}


jaComentou = (event) => {
    this.setState({
        comentario: false,
        quantidadeDeComentarios: this.state.quantidadeDeComentarios + 1,
    })
}


  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }


    let iconeSalvar    

    if(this.state.salvo) {
      iconeSalvar = iconeSalvarPreto
    } else {
      iconeSalvar = iconeSalvarBranco
    }


    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

         <IconeSalvar
          iconeparasalvar={iconeSalvar}
          onClickSalvar={this.onClickSalvar}
        />
      </div>

      {componenteComentario}
    </div>
    
  }
}

export default Post