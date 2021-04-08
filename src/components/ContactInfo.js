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
    background: white;
    width: 100vw;
    height: 740px;
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

const MailSender = style.div`
    color: #C9A469;
    padding: 2%;
    position: relative;

    input, textarea {
        background-color:  #F5F3F0; /* IVORY GRAY: #F9F6E4  #F7F7F6 #f5f3f0 #f3f2ed #F7F6F3*/
        color: #C9A469;
        border: 1px solid black;
        border-radius: 6px;
        margin-top: 5%;
        padding: 2%;
        width: 100%;
        box-sizing: border-box;
    }

    .form-message {
        margin-bottom: 45px;
    }

    .btn-snd-email {
        background-color: #C9A469;
        color: white;
        box-shadow: -1px 1px 0 1px black;
        border: none;
        width: 30%;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .btn-snd-email:active {
        border: none;
        translate(-1px, 1px);
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

const MapContainer = style.div`
    margin-top: 5%;
    background-color: red;
    height: 300px;
    width: 100%;
`
