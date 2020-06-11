import React, { Component } from 'react';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLogged, isCustomer, children } = this.props;
    if (isLogged && isCustomer) {
      return children;
    } else {
      return null;
    }
  }
}

export default Customer;
