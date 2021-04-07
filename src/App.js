import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

import HomeTitle from './components/Title';
import HomeMainInfo from './components/MainInfo';
import HomeOptionMenu from './components/OptionMenu';
import HomeReview from './components/Review';
import HomeEvents from './components/Events';

import ContactTitle from './components/ContactTitle';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          
          <Header/>

          <Switch>
            <Route path="/menu">
              MENU
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

