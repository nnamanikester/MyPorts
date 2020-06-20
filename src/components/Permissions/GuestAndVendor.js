import React, { Component } from 'react';

class GuestAndVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isGuest, user, token } = this.props;
    if (isGuest || (user && user.isVendor)) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

export default GuestAndVendor;
