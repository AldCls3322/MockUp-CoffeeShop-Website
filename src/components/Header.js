import React from 'react'
import style from 'styled-components';
import { Link } from 'react-router-dom';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import BlurOnIcon from '@material-ui/icons/BlurOn';

function Header() {
    return (
        <Container>
            <CoffeeName>
                <BlurOnIcon/>
                ELEVATION CAFE
            </CoffeeName>
            <Options>
                <StyledLink to="/" exact>
                    <HomeButton>
                        <LocalCafeOutlinedIcon/>
                        Home
                    </HomeButton>
                </StyledLink>
                <StyledLink to="/menu">
                    <MenuButton>
                        <LocalCafeOutlinedIcon/>
                        Menu
                    </MenuButton>
                </StyledLink>
                <StyledLink to="/contact">
                    <ContactButton>
                        <LocalCafeOutlinedIcon/>
                        Contact Us
                    </ContactButton>
                </StyledLink>
            </Options>
        </Container>
    )
}

export default Header

const Container = style.div`
    /* Positioning */
    position: -webkit-sticky; // makes the header be always atop no matter if you scroll
    position: sticky;
    top: 0;
    z-index: 1;

    /* Display & Box Model */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;

    /* Color, Background & Text */
    background: #0F0B06; /* BROWN OPTION = #3C2A20 | SMOKE BLACK = #0D0A08 | BLACK CHOCOLATE = #221E16*/
    color: white;
    border-bottom: 1px solid #F2E3D0;
`

const CoffeeName = style.div`
    /* Positioning */
    position: absolute;
    left: 10px;

    /* Display */
    display: flex;
    transform: scale(1.5);    
    margin-left: 40px;
`

const Options = style.div`
    /* Positioning */
    position: absolute;
    right: -10px;

    /* Display */
    transform: scale(0.8);
    display: flex;
`

const StyledLink = style(Link)`
    /* Color, Background & Text */
    text-decoration: none;
    color: white;

    &:visited, &:link {
        text-decoration: none;
    }

    :active, :focus {
        color: #89634B; /* liver chestnut = #9E7A4D ;  */
    }

    :hover {
        position: relative;
        // width: 100%;
        // background-color: #C9A469;

        color: #C9A469; /* liver chestnut = #9E7A4D ;  */

        content: "";
        cursor: pointer;
        transition: .25s linear;
    }
`

const HomeButton = style.div`
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
`

const MenuButton = style.div`
    display: flex;
    margin-left: 5px;
    margin-right: 5px;

    :hover {
        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        cursor: pointer;
        position: relative;
        transition: .25s linear;
    }
`

const ContactButton = style.div`
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    
    :hover {
        position: relative;

        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        
        cursor: pointer;
        transition: .25s linear;
    }
`
