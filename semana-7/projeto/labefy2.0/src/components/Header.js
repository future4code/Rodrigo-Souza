import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    background-color: #fe7e02;
    color: white;
    text-align: center;
    padding: 1px;
`

const Header = () => {

    return (
        <StyledHeader>
            <h1>Labefy</h1>
        </StyledHeader>
    )
}

export default Header;