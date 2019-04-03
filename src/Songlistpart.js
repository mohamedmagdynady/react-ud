import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Songlist from './components/Songlist';
import Songdetail from './components/songdetail';
class Songlistpart extends Component {
  render() {
    return (
      <div className="App">
      <Songlist/>
      <Songdetail/>
      </div>
    );
  }
}

export default Songlistpart;
