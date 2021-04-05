import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import style from 'styled-components';

import Header from './components/Header';
import Title from './components/Title';
import MainInfo from './components/MainInfo';
import OptionMenu from './components/OptionMenu';
import Review from './components/Review';
import Events from './components/Events';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          
          <Header/>
          <Title/>
          <MainInfo/>
          <OptionMenu/>
          <Review/>
          <Events/>
          <Footer/>
          

          <Switch>
            <Route path="/menu">
              MENU
            </Route>
            <Route path="/contact">
              CONTACTS
            </Route>
            <Route path="/benefits-of-coffee">
              BENEFITS OF COFFEE
            </Route>
            <Route path="/our-products">
              BUY OUR COFFEE
            </Route>
            <Route path="/">
              Home Page
            </Route>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

const Container = style.div`
  display: absolute;
`

