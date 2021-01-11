import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
`

const FormularioEstilo = styled.form`
    margin: 1.5vh auto;
    width: 82vw;
`

const InputEstilo = styled.input`
    display: block;
    margin-bottom: 1vh;
    width: 95%;
    outline: 0;
`

const BotaoEstilo = styled.button``

const Alerta = styled.sup`
  color: blue;
  font-size: 10px;
  font-style: oblique;
`


class FormularioPost extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
          autor: '',
          imagemPerfil: '',
          imagemPost: ''

        }
    }

    onChangeAutor = (event) => {
        this.setState({autor: event.target.value})
      }
    
      onChangeImagemPerfil = (event) => {
        this.setState({imagemPerfil: event.target.value})
      }
    
      onChangePost = (event) => {
        this.setState({imagemPost: event.target.value})
      }
    
      criaPost = (event) => {
        event.preventDefault() 
        this.props.onCriaPost({
            autor: this.state.autor,
            imagemPerfil: this.state.imagemPerfil,
            imagemPost: this.state.imagemPost
        })
        this.setState({
          autor: '',
          imagemPerfil: '',
          imagemPost: ''
        })
      
      }


    render() {
        return (
            <Container>
        <FormularioEstilo>
            <label>Nome do Usuário: </label>
            <InputEstilo type='text' value={this.state.autor} onChange={ this.onChangeAutor }/>
            <label>Foto de perfil <Alerta>somente URL*</Alerta> : </label>
            <InputEstilo type='url' value={this.state.imagemPerfil} onChange={ this.onChangeImagemPerfil }/>
            <label>Foto do Post <Alerta>somente URL*</Alerta> : </label>
            <InputEstilo type='url' value={this.state.imagemPost} onChange={ this.onChangePost }/>
            <BotaoEstilo onClick={this.criaPost}>Criar Post</BotaoEstilo>
          </FormularioEstilo>                                    
            </Container>
        )
    }

}

export default FormularioPost