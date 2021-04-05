import React from 'react'
import style from 'styled-components';
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
                <Card1>
                    <Card01Img></Card01Img>
                    <CardText>
                        <CardTextTitle>REST, RELAX, REVIVIE</CardTextTitle>
                        <CardTextContent>At Elevation Cafe you can rest, relax, and revive with good coffee, good company, and excquisite food!</CardTextContent>
                        <FreeWifi><WifiIcon style={{ fontSize: 60}}/></FreeWifi>
                    </CardText>
                </Card1>
                <Card2>
                    <Card02Img></Card02Img>
                    <CardText>
                        <CardTextTitle>DID SOMEONE SAY "COFFEE"!</CardTextTitle>
                        <CardTextContent>We offer some of the best locally roasted coffee using "Columbian" beans. Enjoy Dark, Blonde, Jamaican, Italian, and Decaf roasts. Also available are our speciality Lattes, Frappes, Mochas, Cappuccinos, Americanos, and more...
                            <div>To see more of our coffee, speciality drinks an food menus, please click the link 'Menu'.</div>
                        </CardTextContent>
                    </CardText>
                </Card2>
                <Card3></Card3>
            </Contents>
        </Container>
    )
}

export default MainInfo

const Container = style.div`
    background: #0D0A08; /* BROWN OPTION = #3C2A20 */
    color: white;
    width: 100%;
    height: 600px;
    border-top: 1px solid #F2E3D0;
    padding: 10px;
    padding-top: 20px;
`

const TitleMainInfo = style.div`
    transform: scale(2);
    height: 5%;
    color: #9E7A4D;
    padding: 10px;
    align-items: center;
    justify-content: center;
    display: flex;
`

const Bar = style.div`
    background: #9E7A4D;
    height: 1px;
    width: 20%;
    margin-left: 5px;
    margin-right: 5px;
`

const Contents = style.div`
    padding: 10px;
    justify-content: center;
    height: 90%;
    display: flex;
`

const Card1 = style.div`
    margin: 10px;
    width: 30%;
    height: auto;
    position: relative;
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
    // background: url(${CoffeeWifi}) center center;
    // background-size: cover;
    // background-color: white;
    // height: 50%;
    // width: 20%;
    position: absolute;
    bottom: 0;
    right: 10%;
`

const Card2 = style.div`
    margin: 10px;
    width: 30%;
    height: auto;
`

const Card02Img = style.div`
    width: 100%;
    height: 45%;
    background: url(${CoffeeRlx}) center center;
    background-size: cover;
`

const Card3 = style.div`
    background: url(${HoursImg}) center, center;
    background-size: cover;
    margin: 10px;
    width: 30%;
    height: auto;
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

    div {
        margin-top: 20px;
    }
`
