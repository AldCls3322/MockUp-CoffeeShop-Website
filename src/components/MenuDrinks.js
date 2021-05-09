import React, { useEffect, useState } from 'react'
import style from 'styled-components';
import Item from './MenuItem';
import database from '../firebase'
import { useParams } from 'react-router-dom'
import firebase from "firebase"


function MenuDrinks() {

    let { channelId } = useParams();
    const [ items, setItems ] = useState([]);

    const getItems = () => {
        database.collection('drinksMenu')
        .doc(channelId)
        .collection('drinks')
        .onSnapshot((snapshot)=>{
            let items = snapshot.docs.map((doc)=>doc.data());
            setItems(items);
        })
    }

    useEffect(()=>{
        getItems();
    },[channelId])

    return (
        <Container>
            <Title>
                <Bar/>
                Coffee and Drinks Menu
                <Bar/>
            </Title>
            <Contents>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                {/* {
                    items.length > 0 && items.map((data, index) => (
                        <Item
                            image={data.image}
                            name={data.name}
                            price={data.price}
                            detail={data.details}
                            tag={data.tag}
                        />
                    ))
                } */}
            </Contents>
        </Container>
    )
}

const Container = style.div`
    background: white;
`

const Title = style.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;

    background-color: black;
    color: white;
    border-bottom: 1px solid #F2E3D0;
    font-size: 1.5rem;
    font-weight: bold;
`

const Bar = style. div`
    height: 2px;
    width: 20%;
    margin-left: 10px;
    margin-right: 10px;

    background: #9E7A4D;
`

const Contents = style.div`
    display: flex;
    // align-items: center;
    justify-content: center;
    height: 1000px;
    width: 100%;
    overflow: auto;
    padding: 2%;
    box-sizing: border-box;

    flex-wrap: wrap;
`

export default MenuDrinks
