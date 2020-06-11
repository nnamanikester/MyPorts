import React, { Component } from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isLogged, children } = this.props;
    if (isLogged) {
      return children;
    } else {
      return null;
    }
  }
}

export default User;
