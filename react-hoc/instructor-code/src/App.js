import React, { Component } from 'react';
import './App.css';
import FancyHeader from './Header';
import RenderProp from './RenderProp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FancyHeader title="I'm the header" />
        <RenderProp>
          {(date) => (
            <div>
              <h1>{date}</h1>
              <h1>I'm the <span>child!</span></h1>
              <p>am I a child too?</p>
            </div>)}
        </RenderProp>
      </div>
    );
  }
}

export default App;
