import React from 'react'
import style from 'styled-components';
import TitleImg from '../imgs/coffeeTitle1.jpg';
import BlurOnIcon from '@material-ui/icons/BlurOn';

const Title = () => {
    return (
        <Container>
            <TitleName>
                <BlurOnIcon style={{fontSize: 150}}/>
                <CoffeeName>ELEVATION CAFE</CoffeeName>
                <Message>For the simple pleasures in life</Message>
            </TitleName>
        </Container>
    )
}

export default Title

const Container = style.div`
    position: relative;

    width: 100%;
    height: 610px;
    align-items: center;    /* CHECK THIS CAUSE IT MIGHT BE USELESS*/
    justify-content: center;

    background: url(${TitleImg}) center center;
    background-size: cover;
    background-attachment: fixed;
    color: white;
`

const TitleName = style.div`
    padding-top: 10%;
    // transform: scale(2); // makes all twice as big however the content does fix to its size
`

const CoffeeName = style.div`
    font-size: 2rem;
    font-weight: bolder;
`

const Message = style.div`
    // transform: scale(0.5);
    font-style: italic;
`
