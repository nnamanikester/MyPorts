import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import NetworkReducer from './NetworkReducer';
import CustomerReducer from './CustomerReducer';
import VendorReducer from './VendorReducer';
import CartReducer from './CartReducer';
import AdvertReducer from './AdvertReducer';
import WalletReducer from './WalletReducer';
import AddressReducer from './AddressReducer';
import NotificationsReducer from './NotificationsReducer';
import OrdersReducer from './OrdersReducer';

export default combineReducers({
  auth: AuthReducer,
  network: NetworkReducer,
  customer: CustomerReducer,
  vendor: VendorReducer,
  cart: CartReducer,
  adverts: AdvertReducer,
  wallet: WalletReducer,
  address: AddressReducer,
  notifications: NotificationsReducer,
  orders: OrdersReducer,
});
