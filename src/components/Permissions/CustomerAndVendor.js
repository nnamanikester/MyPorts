import React, { Component } from 'react';

class CustomerAndVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLogged, isVendor, isCustomer, children } = this.props;
    if (isLogged && (isCustomer || isVendor)) {
      return children;
    } else {
      return null;
    }
  }
}

export default CustomerAndVendor;
