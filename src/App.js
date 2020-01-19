import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/Navbar/index";
import NewsLetter from "./components/NewsLetter/index";
import DropOff from './components/DropOff';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <NewsLetter />
        <DropOff />
      </>
    );
  }
}

export default App;
