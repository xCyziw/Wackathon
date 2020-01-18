import React, { Component } from 'react';
import './App.css';
import NavBar from "./components/Navbar/index";
import NewsLetter from "./components/NewsLetter/index";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <NewsLetter/>
      </>
    );
  }
}

export default App;
