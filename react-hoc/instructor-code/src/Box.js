import React from 'react';

export default function box(Component) {
  return class extends React.Component {
    render() {
      return (
        <div 
          style={{
            border: '1px solid black', 
            boxShadow: '0px 0px 79px 0px rgba(112,4,112,1)'}}>
          <Component {...this.props}/> 
        </div> 
      )
    }
  }
}