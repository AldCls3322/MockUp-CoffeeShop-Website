import React from 'react'
import style from 'styled-components';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Map from './Map';
import credentials from './credential';

function ContactInfo() {
    return (
        <Container>
            <Card>
                <Title>SAY HELLO!</Title>
                <Bar/>
                <Contents>
                    Please use the form below to send me a message and I will relay within a week. You can also drop us an email anytime or feel free to give us a call. We'd love to hear from you! 
                    <MailSender>
                        <form>
                            <input type="text" className="form-address" placeholder="Your Email Address" name="email"/>
                            <input type="text" className="form-subject" placeholder="Subject" name="subject"/>
                            <textarea className="form-message" id="" rows="15" placeholder="Your Message" name="message"/>
                            <input type="submit" className="btn-snd-email" value="SEND"/>
                        </form>
                    </MailSender>
                </Contents>
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
                <MapContainer>
                    <Map
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${credentials.mapKey}`}
                        loadingElement={<div style={{ height: "100%" }}/>}
                        containerElement={<div style={{ height: "100%" }}/>}
                        mapElement={<div style={{ height: "100%" }}/>}
                    />
                </MapContainer>
            </Card>
        </Container>
    )
}

export default ContactInfo

const Container = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 800px;
    padding: 2%;
    box-sizing: border-box;

    background: white;
    text-align: left;
`

const Card = style.div`
    height: 98%;
    width: 50%;
    padding: 1%;
    padding-top: 2%;
    box-sizing: border-box;

    .subCard {
        display: flex;
        padding-top: 7%;
    }
`

const Title = style.div`
    padding-bottom: 2%;

    font-size: 1.4rem;
    font-weight: bold;
`

const Bar = style.div`
    height: 4px;
    width: 30%;

    background: #9E7A4D;
`

const Contents = style.div`
    padding-top: 2%;

    color: rgba(0,0,0,0.6);
    font-size: 0.8rem;

    span {
        font-weight: bold;
    }
`

const MailSender = style.div`
    position: relative;

    padding: 2%;

    color: #C9A469;

    input, textarea {
        width: 100%;
        box-sizing: border-box;
        margin-top: 5%;
        padding: 2%;
        border: 1px solid black;
        border-radius: 6px;

        background-color:  #F5F3F0; /* IVORY GRAY: #F9F6E4  #F7F7F6 #f5f3f0 #f3f2ed #F7F6F3*/
        color: #C9A469;
        font-weight: bold;

        ::placeholder { /* works for Chrome, Safaru, Opera, Firefox*/
            color: #C9A469;
            opacity: 1; /* for Firefox */
        }
    }

    .form-message {
        margin-bottom: 45px;
    }

    .btn-snd-email {
        position: absolute;
        bottom: 0;
        right: 0;

        border: none;
        width: 30%;

        background-color: #C9A469;
        color: white;
        
        box-shadow: -1px 1px 0 1px black;
    }

    .btn-snd-email:active {
        border: none;
        translate(-1px, 1px); /* CHECK HOW TO SIMPLE ANIMATE IT */
    }
`

const InfoSubCards = style.div`
    display: flex;
`

const SubTitle = style.div`
    div {
        padding-top: 5px;
        padding-bottom: 15px;

        color: rgba(0,0,0,0.8);
        font-size: 1rem;
        font-weight: bold;
    }
`

const StyledLocationOnIcon = style(LocationOnIcon)`
    color: #C9A469;
`

const StyledPhoneIcon = style(PhoneIcon)`
    padding-right: 5px;

    color: #C9A469;
`

const StyledMailIcon = style(MailIcon)`
    padding-right: 5px;

    color: #C9A469;
`

const MapContainer = style.div`
    height: 300px;
    width: 100%;
    margin-top: 5%;

    background-color: #9E7A4D#9E7A4D;
`
