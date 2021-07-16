import React from 'react'
import style from 'styled-components';
import Karaoke from '../imgs/coffeeKaraoke1.jpg';
import Reading from '../imgs/coffeeReading1.jpg';
import A from '../imgs/coffeeGiftShop.jpg';

function Events() {
    return (
        <Container>
            <Contents>
                <Card>
                    <Card01Img/>
                    <CardText>
                        <CardTextTitle>Open Mic Night</CardTextTitle>
                        <CardTextContent> 
                            <span>STAY TUNED! </span> 
                            Open mic nights at Elevetion Cafe will be starting up again soon! This is open to anyone who would like to play song, sing... Stay tuned for more information, dates and times.
                        </CardTextContent>
                        <StatelessButton>COMING SOON!</StatelessButton>
                    </CardText>
                </Card>
                <Card>
                    <Card02Img/>
                    <CardText>
                        <CardTextTitle>SK High Touch Reading</CardTextTitle>
                        <CardTextContent>Our name came from a book of one of the best storytellers in our modern days. <span>Stephen King. </span>He has written over 60 novels and we wish to create a reading club to promote literature, not only his but from many authors whose can <span>change your life just like our coffee. </span></CardTextContent>
                        <StatelessButton>COMING SOON!</StatelessButton>
                    </CardText>
                </Card>
                <Card>
                    <Card03Img/>
                    <CardText>
                        <CardTextTitle>Elevation Cafe Gift Shop</CardTextTitle>
                        <CardTextContent>
                            <span>COMING SOON! </span>
                            Soon Elevation Cafe will have your favorite tees, caps, mugs, plaques, and of course COFFEE, plus a whole lot more...
                        </CardTextContent>
                        <StatelessButton>COMING SOON!</StatelessButton>
                    </CardText>
                </Card>
            </Contents>
        </Container>
    )
}

export default Events

const Container = style.div`
    position: relative;
    
    width: auto;
    height: max-content;
    padding: 10px;
    padding-top: 20px;

    background: #0F0B06; /* BROWN OPTION = #3C2A20 */
    color: white;
`

const Contents = style.div`
    position: relative;
    
    display: flex;
    justify-content: center;
    height: max-content;
    // padding: 10px;
`

const Card = style.div`
    margin: 10px;
    width: 30%;
    height: max-content;
`

const Card01Img = style.div`
    width: 100%;
    height: 200px;

    background: url(${Karaoke}) center center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const Card02Img = style.div`
    width: 100%;
    height: 200px;

    background: url(${Reading}) center center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const Card03Img = style.div`
    width: 100%;
    height: 200px;

    background: url(${A}) center, center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const CardText = style.div`
    margin: 5px;
    height: max-content;
`

const CardTextTitle = style.div`
    margin: 10px;

    font-size: 1.2rem;
    font-weight: bolder;
`

const CardTextContent = style.div`
    margin-top: 20px;
    text-align: left;
    padding-bottom: 60px;

    color: rgba(255,255,255,0.6);
    font-size: 0.8rem;

    span {
        color: rgba(255,255,255,0.9);
        font-weight: bold;
    }
`

const StatelessButton = style.div`
    position: absolute;
    bottom: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 200px;

    background-color: #9E7A4D;
    border-radius: 15px;
    font-weight: bold;

    :hover {
        background-color: #3C2A20; /* liver chestnut = #9E7A4D ;  */
        color: rgba(255,255,255,0.8);
        
        cursor: pointer;
        transition: .25s linear;
    }
`