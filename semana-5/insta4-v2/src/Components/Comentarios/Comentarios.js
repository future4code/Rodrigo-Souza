import React from 'react'
import styled from 'styled-components'

const ComentariosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5vh 0;

`

const CurtiuOComentario = styled.div`
    display: flex;
    align-items: center;
`

class Comentarios extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            curtidas: false,
            quantidadeDeCurtidas: 0,
            iconeFavorite: 'favorite_border',
            cor: { color: "black" },
        }
    }

    clicouNoCurtir = () => {
        if (this.state.curtidas === false) {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas + 1,
                iconeFavorite: 'favorite',
                cor: { color: "red" },
                curtidas: true
            })
        } else {
            this.setState({
                quantidadeDeCurtidas: this.state.quantidadeDeCurtidas - 1,
                iconeFavorite: 'favorite_border',
                cor: { color: "black" },
                curtidas: false
            })
        }
    }

    render() {

        return(
            <ComentariosContainer>
                {this.props.comment}
                <CurtiuOComentario>

                    <i onClick={this.clicouNoCurtir}
                        className="material-icons"
                        style={this.state.cor}
                    >
                        {this.state.iconeFavorite}
                    </i>
                    {this.state.quantidadeDeCurtidas}
                </CurtiuOComentario>
            </ComentariosContainer>
        )
    }


}

export default Comentarios 