import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from 'styled-components';
import { useEffect, useState } from 'react'
import database from './firebase'

import Header from './components/Header';
import Footer from './components/Footer';

import HomeTitle from './components/HomeTitle';
import HomeMainInfo from './components/HomeMainInfo';
import HomeOptionMenu from './components/HomeOptionMenu';
import HomeReview from './components/HomeReview';
import HomeEvents from './components/HomeEvents';

import MenuTitle from './components/MenuTitle';
import MenuDrinks from './components/MenuDrinks';
import MenuSubtitle from './components/MenuSubtitle';
import MenuFood from './components/MenuFood';

import ContactTitle from './components/ContactTitle';
import ContactInfo from './components/ContactInfo';

function App() {

  // const [rooms, setRooms] = useState([])

  // const getChannels = () => {
  //   database.collection('rooms').onSnapshot((snapshot)=> {
  //     setRooms(snapshot.docs.map((doc) => {
  //       return { id: doc.id, name: doc.data().name }
  //     }))
  //   })
  // }

  // useEffect(() => {
  //   getChannels();
  // }, [])

  return (
    <div className="App">
      <Router>
        <Container>
          
          <Header/>

          <Switch>
            <Route path="/menu">
              <MenuTitle/>
              <MenuDrinks/>
              <MenuSubtitle/>
              <MenuFood/>
            </Route>
            <Route path="/contact">
              <ContactTitle/>
              <ContactInfo/>
            </Route>
            <Route path="/benefits-of-coffee">
              BENEFITS OF COFFEE
            </Route>
            <Route path="/our-products">
              BUY OUR COFFEE
            </Route>
            <Route path="/"> {/* If you place this before the other paths it will ignore them, you may use it at the beginning if: <Route path="/" exact></Route>*/}
              <HomeTitle/>
              <HomeMainInfo/>
              <HomeOptionMenu/>
              <HomeReview/>
              <HomeEvents/>
            </Route>
          </Switch>

          <Footer/>

        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = style.div`
  display: absolute;
`

