import React from 'react'
import style from 'styled-components';
import { Link } from 'react-router-dom';
import HoursImg from '../imgs/openingHours1.jpg';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import CoffeeBg2 from '../imgs/coffeeBackground2.jpg';
import CoffeeRlx from '../imgs/coffeeRelax1.jpg';
import CoffeeWifi from '../imgs/coffeeWifi.png';
import WifiIcon from '@material-ui/icons/Wifi';

function MainInfo() {
    return (
        <Container>
            <TitleMainInfo>
                <Bar></Bar>
                <LocalBarIcon/>
                <Bar></Bar>
            </TitleMainInfo>
            <Contents>
                <Card>
                    <Card01Img></Card01Img>
                    <CardText>
                        <CardTextTitle>REST, RELAX, REVIVIE</CardTextTitle>
                        <CardTextContent>At Elevation Cafe you can rest, relax, and revive with good coffee, good company, and excquisite food!</CardTextContent>
                        <FreeWifi><WifiIcon style={{ fontSize: 60}}/></FreeWifi>
                    </CardText>
                </Card>
                <Card>
                    <Card02Img></Card02Img>
                    <CardText>
                        <CardTextTitle>DID SOMEONE SAY "COFFEE"!</CardTextTitle>
                        <CardTextContent>We offer some of the best locally roasted coffee using "Columbian" beans. Enjoy Dark, Blonde, Jamaican, Italian, and Decaf roasts. Also available are our speciality Lattes, Frappes, Mochas, Cappuccinos, Americanos, and more...
                            <div>To see more of our coffee, speciality drinks an food menus, please click <StyledLink to="/menu">here</StyledLink>.</div>
                        </CardTextContent>
                    </CardText>
                </Card>
                <Card3/>
            </Contents>
        </Container>
    )
}

export default MainInfo

const Container = style.div`
    width: vw;
    height: 600px;
    border-top: 1px solid #F2E3D0;
    padding: 10px;
    padding-top: 20px;

    background: #0F0B06; /* BROWN OPTION = #3C2A20 | BLACK = 0D0A08 */
    color: white;
`

const TitleMainInfo = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5%;
    padding: 10px;
    transform: scale(2);

    color: #9E7A4D;
`

const Bar = style.div`
    height: 1px;
    width: 20%;
    margin-left: 5px;
    margin-right: 5px;

    background: #9E7A4D;
`

const Contents = style.div`
    display: flex;
    justify-content: center;
    height: 90%;
    padding: 10px;
`

const Card = style.div`
    position: relative;

    margin: 10px;
    width: 30%;
    height: auto;
`

const Card01Img = style.div`
    width: 100%;
    height: 45%;

    background: url(${CoffeeBg2}) center center;
    background-size: cover;
    border: 3px solid white;
    border-radius: 6px;
`

const FreeWifi = style.div`
    position: absolute;
    bottom: 0;
    right: 10%;

    /* Image Option */
    // background: url(${CoffeeWifi}) center center;
    // background-size: cover;
    // background-color: white;
    // height: 50%;
    // width: 20%;
`

const Card02Img = style.div`
    width: 100%;
    height: 45%;

    background: url(${CoffeeRlx}) center center;
    background-size: cover;
`

const StyledLink = style(Link)`
    color: rgba(255,255,255);
    text-decoration: underline;

    &:visited, &:link, &:active, &:focus {
        text-decoration: underline;
    }
`

const Card3 = style.div`
    width: 30%;
    height: auto;
    margin: 10px;

    background: url(${HoursImg}) center, center;
    background-size: cover;
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
    margin-top: 20px;
    
    color: rgba(255,255,255,0.6);
    font-size: 0.8rem;
    text-align: left;

    div {
        margin-top: 20px;
    }
`
