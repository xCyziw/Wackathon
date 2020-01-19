import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/Navbar/index";
import Home from "./components/Home/index";

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
