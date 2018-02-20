import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Introduction from './components/Introduction/Introduction';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <About />
      </div>
    );
  }
}

export default App;
