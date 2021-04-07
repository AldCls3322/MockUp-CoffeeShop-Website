import React from 'react'
import style from 'styled-components';
import TitleImg from '../imgs/coffeeBackground4.jpg';

function ContactTitle() {
    return (
        <Container>
            <TitleName>CONTACT US</TitleName>
        </Container>
    )
}

const Container = style.div`
    background: url(${TitleImg}) center center;
    background-size: cover;
    background-attachment: fixed;
    color: white;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const TitleName = style.div`
    font-size: 2rem;
    font-weight: bolder;
    // transform: scale(2); // makes all twice as big however the content does fix to its size
`

export default ContactTitle
