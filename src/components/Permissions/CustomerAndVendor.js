import React, { Component } from 'react';

class CustomerAndVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { user, token, children } = this.props;
    if (user && (user.isCustomer || user.isVendor)) {
      return children;
    } else {
      return null;
    }
  }
}

export default CustomerAndVendor;
