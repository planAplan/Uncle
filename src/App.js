import React, { Component } from 'react';
import Head from './head';
import Body from './body';
import Foot from './foot';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Head />
          <Body />
          <Foot />
      </div>
    );
  }
}

export default App;
