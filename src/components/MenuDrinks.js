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
                <Item image={'/'} name={'COFFEE'} price={'2.25'} detail={'its coffee'} tag={'coffee'}/>
                <Item image={'/'} name={'AMERICANO'} price={'3.00'} detail={'Espresso Shot, Hot Water - 20oz'} tag={'americano'}/>
                <Item image={'/'} name={'ESPRESSO'} price={'1.00'} detail={'Short & Long Shot Espressos made with rich Italian Moak roast straight from Italy'} tag={'espresso'}/>
                <Item image={'/'} name={'CAPPUCCINO'} price={'3.90'} detail={'Espresso w/ Smoothed Layer of Froth - 20oz'} tag={'cappuccino'}/>
                <Item image={'/'} name={'LATTE'} price={'4.00'} detail={'Espresso w/ Almond or Soy Milk - 20oz'} tag={'latte'}/>
                <Item image={'/'} name={'HOT CHOCOLATE'} price={'3.00'} detail={'Hot Chocolate - 20oz'} tag={'hot coco'}/>
                <Item image={'/'} name={'HOT TEA'} price={'2.00'} detail={'Hot Tea - 20oz'} tag={'tea'}/>
                <Item image={'/'} name={'FROZEN LEMONADE'} price={'1.50'} detail={'Choice of Flavors (Strawberry, Blueberry, Raspberry, or Blue Raspberry) - 20oz'} tag={'lemonade'}/>
                <Item image={'/'} name={'REAL FRUIT SMOOTHIE'} price={'4.50'} detail={'Made with REAL FRUIT. Flavors (Strawberry, Blueberry, Mixed Berry, Mango, or Banana) - 20oz'} tag={'smoothie'}/>
                <Item image={'/'} name={'PROTEIN SHAKE'} price={'3.95'} detail={'Muscle Protein Powder, Choice of Milk (Whole, Almond, Skim, Soy), and Fruit (optional) - 20oz'} tag={'protein'}/>
                <Item image={'/'} name={'ICED COFFEE PROTEIN SHAKE'} price={'4.25'} detail={'Iced coffee, Protein Powder, Almond Milk, Mocha - 20oz'} tag={'iced protein'}/>
                <Item image={'/'} name={'ICED COFFEE'} price={'3.00'} detail={'Fresh Brewed Coffee, Ice - 20oz'} tag={'iced coffee'}/>
                <Item image={'/'} name={'FRAPPE'} price={'4.80'} detail={'Frappe Mix, Whole Milk, Ice and Choice of Flavors - 20oz'} tag={'frappe'}/>
                <Item image={'/'} name={'ICED LATTE'} price={'3.90'} detail={'Espresso, Milk, Ice and Choice of Flavors - 20oz'} tag={'iced latte'}/>
                <Item image={'/'} name={'ICED CAPP'} price={'3.75'} detail={'Espresso w/ Smoothed Layer of Froth, Ice - 20oz'} tag={'iced capp'}/>
                <Item image={'/'} name={'ICED VERTICAL LATTE'} price={'4.15'} detail={'Espresso, Milk, Ice and Choice of Flavors - 20oz'} tag={'iced vertical'}/>
                <Item image={'/'} name={'ICED TEA'} price={'1.50'} detail={'Fresh Brewed Tea, Ice (Green or Black) - 20oz'} tag={'iced tea'}/>

                {
                    items.length > 0 && items.map((data, index) => (
                        <Item
                            image={data.image}
                            name={data.name}
                            price={data.price}
                            detail={data.details}
                            tag={data.tag}
                        />
                    ))
                }
            </Contents>
        </Container>
    )
}

const Container = style.div`
    background: white;

    border-bottom: 1px solid #F2E3D0;
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
    height: 700px;
    width: 100%;
    overflow: auto;
    padding: 2%;
    box-sizing: border-box;

    flex-wrap: wrap;
`

export default MenuDrinks
