import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  margin: 0;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
  display: flex;
  justify-content: space-evenly;
  padding: 2vh 0;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
`

const DivPontas = styled.div`
  display: flex;
`

const Logo = styled.img`
  max-width: 50%;
  display: block;
  margin: auto 0;
`

const Icone = styled.i`
  display: block;
  margin: auto 0;
  padding: 0 1vw;
`

const DivCentro = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
`
const IconeCentro = styled.i`
  font-size: 85%;
  align-self: center;
`

const InputPesquisar = styled.input`
  display: block;
  margin: auto;
  height: 65%;
  width: 85%;
  border: none;
  outline:0;
`


class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>

        <DivPontas>
          <Icone className="fab fa-instagram"/>
          <Logo src={require('./instagram.png')} alt='' />

        </DivPontas>

        <DivCentro>
          <IconeCentro className="material-icons" style={{ color: "white" }}>search</IconeCentro>
          <InputPesquisar type="text" placeholder=" Pesquisar"/>
        </DivCentro>

        <DivPontas>
          <Icone className="material-icons">explore</Icone>
          <Icone className="material-icons">favorite_border</Icone>
          <Icone className="material-icons">perm_identity</Icone>
        </DivPontas>

      </Container>
    )
  }

}

export default Header