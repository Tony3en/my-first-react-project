import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WaveSufer from '../WaveSurfer/WaveSufer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img className='App-logo' src={logo} alt="" />
          <p className='App-title'>abcds</p>
        </div>
        <div className='App-intro'>
          {/* <div>abc</div> */}
          <WaveSufer></WaveSufer>
        </div>
      </div>
    )
  }
}

export default App;

