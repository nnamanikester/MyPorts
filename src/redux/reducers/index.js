import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import NetworkReducer from './NetworkReducer';
import CustomerReducer from './CustomerReducer';
import VendorReducer from './VendorReducer';
import CartReducer from './CartReducer';
import AdvertReducer from './AdvertReducer';

export default combineReducers({
  auth: AuthReducer,
  network: NetworkReducer,
  customer: CustomerReducer,
  vendor: VendorReducer,
  cart: CartReducer,
  adverts: AdvertReducer,
});
