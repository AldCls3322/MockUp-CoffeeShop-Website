import React from 'react'
import style from 'styled-components';
import TitleImg from '../imgs/coffeeBackground3.jpg';

function MenuTitle() {
    return (
        <Container>
            <BackgroundImage/>
            <TitleName>
                COFFEES, DRINKS, AND FOOD
                <p>Elevation Coffee Shop, Internet Cafe / Coffees, Drinks, and Food</p>
            </TitleName>
        </Container>
    )
}

const Container = style.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;

    color: white;
`

const BackgroundImage = style.div`
    position: absolute;
    width: 100%;
    height: 100%;

    background: url(${TitleImg}) center center;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(50%);
`

const TitleName = style.div`
    position: absolute;

    font-size: 2rem;
    font-weight: bolder;
    // transform: scale(2); // makes all twice as big however the content does fix to its size

    p {
        color: #9E7A4D;
        font-size: 1rem;
        font-style: italic;
    }
`

export default MenuTitle
