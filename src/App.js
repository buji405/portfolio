import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Introduction from './components/Introduction/Introduction';
import ComplimentaryInfo from './components/Compliments/Compliments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <article className="container-break"></article>
        <ComplimentaryInfo />
        <About />
      </div>
    );
  }
}

export default App;
