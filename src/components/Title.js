import React from 'react'
import style from 'styled-components';
import TitleImg from '../imgs/coffeeTitle1.jpg';

const Title = () => {
    return (
        <Container>
            TITLE
        </Container>
    )
}

export default Title

const Container = style.div`
    background: url(${TitleImg}) center center;
    background-size: cover;
    width: 100%;
    height: 500px;
`
