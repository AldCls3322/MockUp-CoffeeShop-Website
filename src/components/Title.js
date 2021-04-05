import React from 'react'
import style from 'styled-components';
import TitleImg from '../imgs/coffeeTitle1.jpg';
import BlurOnIcon from '@material-ui/icons/BlurOn';

const Title = () => {
    return (
        <Container>
            <TitleName>
                <BlurOnIcon/>
                <CoffeeName>ELEVATION CAFE</CoffeeName>
                <Message>For the simple pleasures in life</Message>
            </TitleName>
        </Container>
    )
}

export default Title

const Container = style.div`
    background: url(${TitleImg}) center center;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    width: 100%;
    height: 610px;
    align-items: center;
    justify-content: center;
    display: absolute;
`

const TitleName = style.div`
    padding-top: 120px;
    transform: scale(2);
`

const CoffeeName = style.div`
    font-weight: bolder;
`

const Message = style.div`
    transform: scale(0.5);
    font-style: italic;
`
