import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
    background-color: #fe7e02;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
`

function Footer() {
    return (
        <FooterWrapper>
            <h4>Epps é a melhor turma!</h4>
        </FooterWrapper>
    )
}

export default Footer