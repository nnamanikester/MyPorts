import React, {Component} from 'react';

class Vendor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {user, token, children} = this.props;
    if (user && user.isVendor) {
      return children;
    } else {
      return null;
    }
  }
}

export default Vendor;
