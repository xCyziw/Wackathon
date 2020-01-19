import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/Navbar/index";
import Home from "./components/Home/index";
import NewsLetter from "./components/NewsLetter/index";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Home />
      </>
    );
  }
}

export default App;
