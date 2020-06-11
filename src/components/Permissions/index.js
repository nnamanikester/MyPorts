import Customer from './Customer';
import { connect } from 'react-redux';
import Vendor from './Vendor';
import Guest from './Guest';
import User from './User';

const mapStateToProps = (state) => {
  const { isLogged, isCustomer, isVendor, isSkipped } = state.auth;
  return {
    isLogged,
    isCustomer,
    isVendor,
    isGuest: isSkipped,
  };
};

const Permissions = {
  /**
   * This Renders the Components wrapped in between if the user is logged in
   * as a customer
   */
  Customer: connect(mapStateToProps)(Customer),
  /**
   * This Renders the Components wrapped in between if the user is logged in
   * as a vendor
   */
  Vendor: connect(mapStateToProps)(Vendor),
  /**
   * This Renders the Components wrapped in between if no user is logged in.
   */
  Guest: connect(mapStateToProps)(Guest),
  /**
   * This Renders the Components wrapped in between if user is logged in.
   */
  User: connect(mapStateToProps)(User),
};

export default Permissions;
