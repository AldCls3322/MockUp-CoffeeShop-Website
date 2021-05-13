import React from 'react'
import style from 'styled-components'

function MenuItem({ image, name, price, detail, tag }) {
    return(
        <Container>
            <ItemImage>
                <img src={image} />
            </ItemImage>
            <ItemText>
                <ItemHeader>
                    <Name>{name}</Name>
                    <Price>$ {price}</Price>
                </ItemHeader>
                <ItemFoot>
                    <Details>{detail}</Details>
                    <Tag>{tag}</Tag>
                </ItemFoot>
            </ItemText>
        </Container>
    )
}

const Container = style.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    padding: 1%;
    margin: 1px;

    // background: gray; /* change for transparent*/

    box-sizing: border-box;
    flex: 1 1 40%;
`

const ItemImage = style.div`
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 25%;
`

const ItemText = style.div`
    height: 100%;
    width: 75%;

    color: black;
`

const ItemHeader = style.div`
    display: flex;
    position: relative;
    height: 30%;

    font-weight: bold;
`

const Name = style.div``

const Price = style.div`
    position: absolute;
    right: 0;
`

const ItemFoot = style.div`
    display: flex;
    position: relative;
    height: 70%;
`

const Details = style.div`
    width: 70%;
    //align-items: center;

    color: #9E7A4D;
    font-size: 0.8rem;
    text-align: left;
`

const Tag = style.div`
    position: absolute;
    right: 0;
    height: 20px;
    width: 100px;

    background: #9E7A4D;
    color: white;
    border-radius: 5px;
    font-weight: 500;
    font-style: italic;
    font-size: 0.9rem;
    text-align: center;
`

export default MenuItem