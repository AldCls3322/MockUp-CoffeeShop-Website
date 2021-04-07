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
                <StyledLink to="/menu" >
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
    background: #221E16; /* BROWN OPTION = #3C2A20 SMOKE BLACK = #0D0A08 */
    color: white;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #F2E3D0;
    align-items: center;
    justify-content: center;
    display: flex;
    position: -webkit-sticky; // makes the header be always atop no matter if you scroll
    position: sticky;
    top: 0;
    z-index: 1;
`

const CoffeeName = style.div`
    transform: scale(1.5);
    display: flex;
    position: absolute;
    margin-left: 40px;
    left: 10px;
`

const Options = style.div`
    transform: scale(0.8);
    display: flex;
    position: absolute;
    right: -10px;
`

const StyledLink = style(Link)`
    text-decoration: none;
    color: white;

    &:visited, &:link {
        text-decoration: none;
    }

    :active, :focus {
        color: #89634B; /* liver chestnut = #9E7A4D ;  */
    }

    :hover {
        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        cursor: pointer;
        content: "";
        position: relative;
        // width: 100%;
        // background-color: #C9A469;
        transition: .25s linear;
    }
`

const HomeButton = style.div`
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
`

const MenuButton = style.div`
    margin-left: 5px;
    margin-right: 5px;
    display: flex;

    :hover {
        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        cursor: pointer;
        position: relative;
        transition: .25s linear;
    }
`

const ContactButton = style.div`
    margin-left: 5px;
    margin-right: 5px;
    display: flex;

    :hover {
        color: #C9A469; /* liver chestnut = #9E7A4D ;  */
        cursor: pointer;
        position: relative;
        transition: .25s linear;
    }
`
