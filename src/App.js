import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Songlist from './components/Songlist';
import Songdetail from './components/songdetail';
import {Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div className="App">
       <button className="ui button" ><Link to={{pathname:`/songlistpart`}}>  <i className="play icon"></i>
    go to songlistpart</Link>
  
  </button>
      
      </div>
    );
  }
}

export default App;
