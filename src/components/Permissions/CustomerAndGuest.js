import React, { Component } from 'react';

class CustomerAndGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isGuest, isCustomer, isLogged } = this.props;
    if (isGuest || (isCustomer && isLogged)) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

export default CustomerAndGuest;
