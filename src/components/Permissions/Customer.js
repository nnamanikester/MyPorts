import React, {Component} from 'react';

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {token, user, children} = this.props;
    if (user && user.isCustomer) {
      return children;
    } else {
      return null;
    }
  }
}

export default Customer;
