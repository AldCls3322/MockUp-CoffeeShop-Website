import React from 'react'
import style from 'styled-components';
import CoffeeBg5 from '../imgs/coffeeBackground5.jpg';

function Review() {
    return (
        <Container>
            <ReviewBackground></ReviewBackground>
            <ReviewTitle>What Our Custumers Say ...</ReviewTitle>
            <ReviewInfo>I love everything at Elevation Cafe. There was a peaceful, calm, atmosphere that was so relaxing and nice to enjoy a hot drink. The breakfast sandwich was very good and well made. I will definitely be back again!</ReviewInfo>
        </Container>
    )
}

export default Review

const Container = style.div`
    color: white;
    width: 100%;
    height: 200px;
    position: relative;
`

const ReviewBackground = style.div`
    background: url(${CoffeeBg5}) center center;
    background-size: cover;
    background-attachment: fixed;
    filter: blur(2px) grayscale(100%) brightness(30%);
    background-color: black;
    height: 100%;
    width: 100%;
    position: absolute;
`

const ReviewTitle = style.div`
    color: #9E7A4D;
    font-weight: bold;
    font-size: 1.5rem;
    height: 30%;
    position: relative;

    //padding: 10px;
    
    text-align: center;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
`

const ReviewInfo = style.div`
    height: 70%;
    position: relative;
`
