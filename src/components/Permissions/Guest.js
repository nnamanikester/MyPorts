import React, { Component } from 'react';

class Guest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.children;
  }
}

export default Guest;
