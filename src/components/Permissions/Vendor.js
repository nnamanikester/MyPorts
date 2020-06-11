import React, { Component } from 'react';

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLogged, isVendor, children } = this.props;
    if (isLogged && isVendor) {
      return children;
    } else {
      return null;
    }
  }
}

export default Vendor;
