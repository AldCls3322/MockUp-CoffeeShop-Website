import React from 'react'
import style from 'styled-components'

function MenuItem({ image, name, price, detail, tag }) {
    return(
        <Container>
            <ItemImage>
                <img src={'/'} />
            </ItemImage>
            <ItemText>
                <ItemHeader>
                    <Name>coffee</Name>
                    <Price>$ 22</Price>
                </ItemHeader>
                <ItemFoot>
                    <Details>its coffee</Details>
                    <Tag>expreso</Tag>
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

    background: gray; /* change for transparent*/

    box-sizing: border-box;

    flex: 0 1 33%;
`

const ItemImage = style.div`
    height: 100%;
    width: 25%;
`

const ItemText = style.div`
    color: black;
    width: 75%;
`

const ItemHeader = style.div`
    display: flex;
    position: relative;
`

const Name = style.div``

const Price = style.div`
    position: absolute;
    right: 0;
`

const ItemFoot = style.div`
    //display: flex;
`

const Details = style.div`
    color: #9E7A4D;
`

const Tag = style.div`
    background: #9E7A4D;
    color: white;
`

export default MenuItem