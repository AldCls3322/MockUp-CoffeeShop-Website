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
    
    display: flex;
    align-items: flex-end; // makes the text item be at bottom of this component.
    justify-content: center;
`

const ReviewInfo = style.div`
    height: 70%;
    // width: 50%;
    font-style: italic;
    font-size: 0.8rem;
    padding: 1%;
    padding-left: 25%;
    padding-right: 25%;
    margin: 0;
    box-sizing: border-box; // respects the width and height of the parent component.
    position: relative;
    //left: 25%;
    
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
