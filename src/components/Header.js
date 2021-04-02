import React from 'react'
import style from 'styled-components';

function Header() {
    return (
        <Container>
            <CoffeeName>ELEVATION COFFEE</CoffeeName>
        </Container>
    )
}

export default Header

const Container = style.div`
    background: #0D0A08; /* BROWN OPTION = #3C2A20 */
    width: 100%;
    height: 60px;
`

const CoffeeName = style.div`

`
