import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import World from './components/Map';
import Chambers from './components/Chambers';
import Chat from './components/Chat';
import Newsfeed from "./components/News";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <World />
        <Chambers />
        <Chat />
      </div>
    );
  }
}

export default App;
