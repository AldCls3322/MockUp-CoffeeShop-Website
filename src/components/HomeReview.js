import React from 'react'
import style from 'styled-components';
import CoffeeBg5 from '../imgs/coffeeBackground5.jpg';

function Review() {
    return (
        <Container>
            <ReviewBackground></ReviewBackground>
            <ReviewTitle>
                What Our Custumers Say ...
            </ReviewTitle>
            <ReviewInfo>
                <p class="review">I love everything at Elevation Cafe. There was a peaceful, calm, atmosphere that was so relaxing and nice to enjoy a hot drink. The breakfast sandwich was very good and well made. I will definitely be back again!</p>
                <p class="user">Aldo Celis</p>
            </ReviewInfo>
        </Container>
    )
}

export default Review

const Container = style.div`
    position: relative;

    color: white;
    width: 100%;
    height: 200px;
`

const ReviewBackground = style.div`
    position: absolute;

    height: 100%;
    width: 100%;

    background-color: black;
    background: url(${CoffeeBg5}) center center;
    background-size: cover;
    background-attachment: fixed;
    filter: blur(2px) grayscale(100%) brightness(30%);
`

const ReviewTitle = style.div`
    position: relative;

    display: flex;
    align-items: flex-end; // makes the text item be at bottom of this component.
    justify-content: center;
    height: 30%;

    color: #9E7A4D;
    font-weight: bold;
    font-size: 1.5rem;
`

const ReviewInfo = style.div`
    position: relative;
    //left: 25%;

    height: 70%;
    // width: 50%;
    padding: 1%;
    padding-left: 25%;
    padding-right: 25%;
    margin: 0;
    box-sizing: border-box; // respects the width and height of the parent component.

    font-style: italic;
    font-size: 0.8rem;
    
    p.review {
        color: rgba(255,255,255,0.8);
    }

    p.user {
        padding-top: 5px;
        
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 500;
    }
`
