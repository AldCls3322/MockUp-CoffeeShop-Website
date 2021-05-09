import React from 'react'
import style from 'styled-components';
import TitleImg from '../imgs/coffeeBackground5.jpg';
import BlurOnIcon from '@material-ui/icons/BlurOn';

function MenuSubtitle() {
    return (
        <Container>
            <BlurOnIcon style={{fontSize: 150}}/>
        </Container>
    )
}

const Container = style.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;

    background: url(${TitleImg}) center center;
    background-size: cover;
    background-attachment: fixed;
    color: white;
`

export default MenuSubtitle
