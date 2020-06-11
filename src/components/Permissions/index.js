import Customer from './Customer';
import { connect } from 'react-redux';
import Vendor from './Vendor';

const mapStateToProps = (state) => {
  const { isLogged, isCustomer, isVendor, isSkipped } = state.auth;
  return {
    isLogged,
    isCustomer,
    isVendor,
    isSkipped,
  };
};

const Permissions = {
  Customer: connect(mapStateToProps)(Customer),
  Vendor: connect(mapStateToProps)(Vendor),
};

export default Permissions;
