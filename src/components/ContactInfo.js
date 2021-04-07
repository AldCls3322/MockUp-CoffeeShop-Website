import React from 'react'
import style from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

function ContactInfo() {
    return (
        <Container>
            <Card>
                <Title>SAY HELLO!</Title>
                <Bar/>
                <Contents></Contents>
            </Card>
            <Card>
                <Title>CONTACT ME AT:</Title>
                <Bar/>
                <Contents>
                    <p>This is a <span>fake website</span> and so it is the address and location, however my real email and phone are display, please feel free to contact me.</p>
                    <InfoSubCards>
                        <Card className="subCard">
                            <StyledMailIcon style={{ fontSize: 30}}/>
                            <SubTitle>
                                <div>EMAIL</div>
                                <p>aldocelis22@gmai.com</p>
                            </SubTitle>
                        </Card>
                        <Card className="subCard">
                            <StyledPhoneIcon style={{ fontSize: 30}}/>
                            <SubTitle>
                                <div>PHONE</div>
                                <p>Phone: +52 (777) 305-9465</p>
                            </SubTitle>
                        </Card>
                    </InfoSubCards>
                    <Card className="subCard">
                        <StyledLocationOnIcon style={{ fontSize: 30}}/>
                        <SubTitle>
                            <div>OUR ADDRESS</div>
                            <p>66 E Ohio St</p>
                            <p>Chicago, IL 60611, USA</p>
                        </SubTitle>
                    </Card>
                </Contents>
            </Card>
        </Container>
    )
}

export default ContactInfo

const Container = style.div`
    background: white;
    width: 100vw;
    height: 710px;
    padding: 2%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
`

const Card = style.div`
    height: 98%;
    width: 50%;
    padding: 1%;
    padding-top: 2%;
    box-sizing: border-box;

    .subCard {
        padding-top: 7%;
        display: flex;
    }
`

const Title = style.div`
    font-size: 1.4rem;
    font-weight: bold;
    padding-bottom: 2%;
`

const Bar = style.div`
    background: #9E7A4D;
    height: 4px;
    width: 30%;
`

const Contents = style.div`
    color: rgba(0,0,0,0.6);
    font-size: 0.8rem;
    padding-top: 2%;

    span {
        font-weight: bold;
    }
`

const InfoSubCards = style.div`
    display: flex;
`

const SubTitle = style.div`
    div {
        color: rgba(0,0,0,0.8);
        font-size: 1rem;
        font-weight: bold;
        padding-top: 5px;
        padding-bottom: 15px;
    }

`

const StyledLocationOnIcon = style(LocationOnIcon)`
    color: #C9A469;
`

const StyledPhoneIcon = style(PhoneIcon)`
    color: #C9A469;
    padding-right: 5px;
`

const StyledMailIcon = style(MailIcon)`
    color: #C9A469;
    padding-right: 5px;
`
