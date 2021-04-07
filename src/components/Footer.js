import React from 'react'
import style from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <Container>
            <CopyRighted>@2021 Elevation Cafe - All rights reserved!</CopyRighted>
            <SocialMedias>
                <FacebookIcon/>
                <TwitterIcon/>
                <LinkedInIcon/>
            </SocialMedias>
            <Creator>created by: Aldo Celis Cordova</Creator>
        </Container>
    )
}

export default Footer

const Container = style.div`
    background-color: #0D0A08;
    border-top: 1px solid #F2E3D0;
    color: white;
    width: 100%;
    height: 70px;
    
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`

const CopyRighted = style.div`
    font-size: 0.6rem;
    padding-left: 20px;
    position: absolute;
    left: 0;
`

const SocialMedias = style.div`
`

const Creator = style.div`
    font-size: 0.5rem;
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
`
