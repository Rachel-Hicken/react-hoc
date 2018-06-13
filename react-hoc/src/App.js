import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Box from './Box'
import Header from './Header'
import RenderProp from './RenderProp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="I'm a Header" />
        <RenderProp>
          {(date)=>(
          <div>
          <h1>{date}</h1>
          <h1>I'm the Child</h1>
          <p>Am I a child too?</p>
          </div>)}
        </RenderProp>
      </div>
    );
  }
}

export default App;
