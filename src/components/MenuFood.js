import React from 'react'
import style from 'styled-components';
import Item from './MenuItem';

function MenuFood() {
    return (
        <Container>
            <Title>
                <Bar/>
                Food Menu
                <Bar/>
            </Title>
            <Contents>
                <Item image={'/'} name={'BAGELS'} price={'1.50'} detail={'Everything and Plain (Cream Cheese add .25)'} tag={'bagels'}/>
                <Item image={'/'} name={'BREAKFAST SANDWICHES'} price={'3.95'} detail={'Choice of Buffalo Chicken & Turkey Pesto'} tag={'sandwich'}/>
                <Item image={'/'} name={'PANINI'} price={'7.25'} detail={'Our Classic BLT Option'} tag={'panini'}/>
                <Item image={'/'} name={'CALIFORNIA WRAP'} price={'8.85'} detail={'Includes: Turkey, Avocado, Bacon, Lettuce, Tomato, Provolone & Honey Mustard'} tag={'wrap'}/>
                <Item image={'/'} name={'GREEK CHICKEN WRAP'} price={'7.99'} detail={'Includes: Chicken, Feta, Tzatziki Sauce, Lettuce, Cucumber & Tomato'} tag={'wrap'}/>
                <Item image={'/'} name={'CRANBERRY BLUE WRAP'} price={'7.99'} detail={'Includes: Chicken, Crumbled Blue Cheese, Craisians, Lettuce, Cucumber, Tomato & Balsamic Dressing'} tag={'wrap'}/>
                <Item image={'/'} name={'MANWRAP'} price={'8.85'} detail={'Comes with: Ham, Turkey, Bacon, Sausage, Lettuce, Tomato, Onion, Spinach, Cucumber, Mayo & Honey Mustard'} tag={'wrap'}/>
                <Item image={'/'} name={'MEDITERRANEAN'} price={'8.25'} detail={'Toppings include: Chicken, Tzatziki Sauce Base, Feta Cheese, Tomatoes, Olive & Olive Oil Drizzle'} tag={'flatbread'}/>
                <Item image={'/'} name={'CHIPOTLE'} price={'8.25'} detail={'Toppings include: Chicken, Chipotle Sauce Base, Cheddar Cheese, Tomatoes, Ranch Drizzle (add Jalapenos, Onions)'} tag={'flatbread'}/>
                <Item image={'/'} name={'CAPRESE'} price={'8.25'} detail={'Toppings include: Basil Pesto Base, Mozzarella, Cheese, Spinach, Tomatoes, Basel Herb Oil Drizzle (add Chicken)'} tag={'flatbread'}/>
                <Item image={'/'} name={'NY STYLE'} price={'8.25'} detail={'Toppings include: Red Sauce, Mozzarella Cheese, Special Seasoning & ONE Additional Topping (Mushrooms, Onion, Spinach, Pepperoni or Peppers)'} tag={'flatbread'}/>
                <Item image={'/'} name={'"BUILD-YOUR-OWN" SALAD'} price={'8.00'} detail={'"Build Your Own"'} tag={'salad'}/>
                <Item image={'/'} name={'ELEVATION SALAD'} price={'8.00'} detail={'Our Classical well-dressed Salad'} tag={'salad'}/>
                <Item image={'/'} name={'BLAZED SALAD'} price={'7.75'} detail={'Includes: Dried Tomatoes, Crutons, and Our Signature Dressing'} tag={'salad'}/>
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

export default MenuFood
