import Customer from './Customer';
import { connect } from 'react-redux';
import Vendor from './Vendor';
import Guest from './Guest';

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
  Customer: connect(mapStateToProps)(Customer),
  Vendor: connect(mapStateToProps)(Vendor),
  Guest: connect(mapStateToProps)(Guest),
};

export default Permissions;
