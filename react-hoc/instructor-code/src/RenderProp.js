import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

RenderProp.propTypes = {
  children: PropTypes.func.isRequired
}