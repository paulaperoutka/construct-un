import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "reactstrap";
import logo from './logo.svg';
import './App.css';
import World from './components/Map';
import Chambers from './components/Chambers';
import Chat from './components/Chat';
import Newsfeed from "./components/News";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div className="row">
          <Newsfeed />
        </div>
        <div className="row">
          <World />
          <Chambers />
        </div>
        <div className="row">
          <Chat />
        </div>
      </div>
    );
  }
}

export default App;
