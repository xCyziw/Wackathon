import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import './App.css';
import NavBar from "./components/Navbar/index";
import Home from "./components/Home"
import DropOff from './pages/DropOff'

class App extends Component {
  render() {
    return (
      <>
        <Router basename={ process.env.PUBLIC_URL }>
          <NavBar />
          <Route exact path='/' component={Home} className="page-container" />
          <Route exact path='/donate' component={DropOff} />
          {/* <Route exact path='/volunteer' component={Volunteer} /> */}
        </Router>

      </>
    );
  }
}

export default App;
