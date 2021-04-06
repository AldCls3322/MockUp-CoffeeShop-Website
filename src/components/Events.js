import React from 'react'
import style from 'styled-components';
import Karaoke from '../imgs/coffeeKaraoke1.jpg';
import Reading from '../imgs/coffeeReading1.jpg';
import A from '../imgs/coffeeGiftShop.jpg';

function Events() {
    return (
        <Container>
            <Contents>
                <Card1>
                    <Card01Img></Card01Img>
                    <CardText>
                        <CardTextTitle>Open Mic Night</CardTextTitle>
                        <CardTextContent> 
                            <span>STAY TUNED! </span> 
                            Open mic nights at Elevetion Cafe will be starting up again soon! This is open to anyone who would like to play song, sing... Stay tuned for more information, dates and times.
                        </CardTextContent>
                        <StatelessButton>COMING SOON!</StatelessButton>
                    </CardText>
                </Card1>
                <Card2>
                    <Card02Img></Card02Img>
                    <CardText>
                        <CardTextTitle>SK High Touch Reading</CardTextTitle>
                        <CardTextContent>Our name came from a book of one of the best storytellers in our modern days. Stephen King. </CardTextContent>
                        <StatelessButton>LEARN MORE!</StatelessButton>
                    </CardText>
                </Card2>
                <Card3>
                    <Card03Img></Card03Img>
                    <CardText>
                        <CardTextTitle>Elevation Cafe Gift Shop</CardTextTitle>
                        <CardTextContent>
                            <span>COMING SOON! </span>
                            Soon Elevation Cafe will have your favorite tees, caps, mugs, plaques, and of course COFFEE, plus a whole lot more...
                        </CardTextContent>
                        <StatelessButton>COMING SOON!</StatelessButton>
                    </CardText>
                </Card3>
            </Contents>
        </Container>
    )
}

export default Events

const Container = style.div`
    background: #0D0A08; /* BROWN OPTION = #3C2A20 */
    color: white;
    width: vw;
    height: 400px;
    position: relative;

    padding: 10px;
    padding-top: 20px;
`

const Contents = style.div`
    // padding: 10px;
    justify-content: center;
    height: 100%;
    display: flex;
    position: relative;
`

const Card1 = style.div`
    margin: 10px;
    width: 30%;
    height: auto;
`

const Card01Img = style.div`
    width: 100%;
    height: 45%;
    background: url(${Karaoke}) center center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const Card2 = style.div`
    margin: 10px;
    width: 30%;
    height: auto;
`

const Card02Img = style.div`
    width: 100%;
    height: 45%;
    background: url(${Reading}) center center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const Card3 = style.div`
    margin: 10px;
    width: 30%;
    height: auto;
`

const Card03Img = style.div`
    width: 100%;
    height: 45%;
    background: url(${A}) center, center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const CardText = style.div`
    margin: 5px;
`

const CardTextTitle = style.div`
    margin: 10px;
    font-size: 1.2rem;
    font-weight: bolder;
`

const CardTextContent = style.div`
    color: rgba(255,255,255,0.6);
    margin-top: 20px;
    font-size: 0.8rem;
    text-align: left;

    span {
        color: rgba(255,255,255,0.9);
        font-weight: bold;
    }
`

const StatelessButton = style.div`
    background-color: #9E7A4D;
    border-radius: 15px;
    font-weight: bold;
    height: 50px;
    width: 200px;
    position: absolute;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: #3C2A20; /* liver chestnut = #9E7A4D ;  */
        color: rgba(255,255,255,0.8);
        cursor: pointer;
        transition: .25s linear;
    }
`