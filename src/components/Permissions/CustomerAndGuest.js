import React, { Component } from 'react';

class CustomerAndGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isGuest, user, token } = this.props;
    if (isGuest || (user && user.isCustomer)) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

export default CustomerAndGuest;
