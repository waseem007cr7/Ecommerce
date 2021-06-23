// import logo from './logo.svg';
import './Css/App.css';
import './Css/Header.css';
import './Css/Footer.css';
import './Css/Signup.css';
import './Css/Contact.css';
import './Css/Home.css';
import './Css/Shop.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Signup from './components/Signup';

import { BrowserRouter as Router,Route,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <Switch>
            <Route path = "/" exact component = {Home}/>
            <Route path = "/Shop" component = {Shop}/>
            <Route path = "/Contact" component = {Contact}/>
            <Route path = "/Signup" component = {Signup}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
