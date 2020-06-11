import React, { Component } from 'react';

class GuestAndVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isGuest, isLogged, isVendor } = this.props;
    if (isGuest || (isVendor && isLogged)) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

export default GuestAndVendor;
