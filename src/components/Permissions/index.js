import Customer from './Customer';
import { connect } from 'react-redux';
import Vendor from './Vendor';
import Guest from './Guest';
import CustomerAndVendor from './CustomerAndVendor';
import CustomerAndGuest from './CustomerAndGuest';
import GuestAndVendor from './GuestAndVendor';

const mapStateToProps = (state) => {
  const { token, user, isSkipped } = state.auth;
  return {
    token,
    user,
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
   * This Renders the Components wrapped in between if user is logged in
   * and is either a vendor or a customer.
   */
  CustomerAndVendor: connect(mapStateToProps)(CustomerAndVendor),
  /**
   * This Renders the Components wrapped in between if user is iether a customer
   * or a Guest
   */
  CustomerAndGuest: connect(mapStateToProps)(CustomerAndGuest),
  /**
   * This Renders the Components wrapped in between if user is either a Vendor
   * or a Guest
   */
  GuestAndVendor: connect(mapStateToProps)(GuestAndVendor),
};

export default Permissions;
