import React, { Component } from 'react';

export default class RenderProp extends Component {
  constructor() {
    super()
    this.state = {
      date: Date.now()
    }
  }

  render() {
    return (
      <div>
        { this.props.children(this.state.date) }
      </div>
    )
  }
}