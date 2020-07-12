import React, {useState, useEffect} from 'react';
import {useMutation} from '@apollo/react-hooks';
import {CREATE_CUSTOMER, CREATE_VENDOR} from '../../apollo/mutations/';
import {setStorage} from '../../redux/actions/AuthActions';
import CustomerStep1 from './customerSteps/CustomerStep1';
import CustomerStep2 from './customerSteps/CustomerStep2';
import VendorStep1 from './vendorSteps/VendorStep1';
import VendorStep2 from './vendorSteps/VendorStep2';
import CreateProfileInitial from './CreateProfileInitial';
import {TOKEN_STORAGE, USER_STORAGE} from '../../constants';
import {connect} from 'react-redux';
import {checkNetworkStatus} from '../../redux/actions/NetworkActions';
import NetworkErrorIndicator from '../../components/NetworkErrorIndicator';
import * as UI from '../../components/common';
import AsyncStorage from '@react-native-community/async-storage';
import {ToastAndroid} from 'react-native';

const CreateProfileScreen = ({checkNetworkStatus, offline, setStorage}) => {
  const [customerStep, setCustomerStep] = useState(0);
  const [vendorStep, setVendorStep] = useState(0);

  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerPhoto, setCustomerPhoto] = useState(null);

  const [vendorShopName, setVendorShopName] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [vendorLocation, setVendorLocation] = useState('');
  const [vendorLogo, setVendorLogo] = useState(null);
  const [vendorCoverPhoto, setVendorCoverPhoto] = useState(null);

  const [
    createCustomer,
    {data: customerData, loading: customerLoading},
  ] = useMutation(CREATE_CUSTOMER);

  const [createVendor, {loading: vendorLoading}] = useMutation(CREATE_VENDOR);

  const handleCreateCustomer = () => {
    checkNetworkStatus();
    if (!offline) {
      createCustomer({
        variables: {
          firstName: customerFirstName,
          lastName: customerLastName,
          phone: customerPhone,
        },
      }).catch((err) => {
        ToastAndroid.show(
          'An error occured while trying to create your profile!',
          ToastAndroid.SHORT,
        );
        return err;
      });
    }
  };

  const handleCreateVendor = () => {
    checkNetworkStatus();

    if (!offline) {
      createVendor({
        variables: {
          name: vendorShopName,
          email: vendorEmail,
          phone: vendorPhone,
          location: vendorLocation,
          logo: vendorLogo,
          description: vendorDescription,
          coverPhoto: vendorCoverPhoto,
        },
      })
        .then(async (res) => {
          const user = res.data.createVendor;
          const token = await AsyncStorage.getItem(TOKEN_STORAGE);
          await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
          setStorage(user, token);
        })
        .catch((err) => {
          ToastAndroid.show(
            'An error occured while trying to create your profile!',
            ToastAndroid.SHORT,
          );
          return err;
        });
    }
  };

  // Setting user and token to async storage
  const setData = async (user) => {
    const token = await AsyncStorage.getItem(TOKEN_STORAGE);
    await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
    setStorage(user, token);
  };

  // Checking if data is returned
  if (customerData) {
    const user = customerData.createCustomer;
    setData(user);
  }

  useEffect(() => {
    checkNetworkStatus();
  }, []);

  return (
    <>
      <UI.Loading show={customerLoading || vendorLoading} />
      <NetworkErrorIndicator
        onRetry={() => checkNetworkStatus()}
        show={offline}
      />
      <CreateProfileInitial
        onCustomer={() => setCustomerStep(1)}
        onVendor={() => setVendorStep(1)}
        show={customerStep === 0 && vendorStep === 0}
      />

      <CustomerStep1
        firstName={customerFirstName}
        onFirstName={(value) => setCustomerFirstName(value)}
        lastName={customerLastName}
        onLastName={(value) => setCustomerLastName(value)}
        phone={customerPhone}
        onPhone={(value) => setCustomerPhone(value)}
        onBack={() => setCustomerStep(customerStep - 1)}
        onNext={() => setCustomerStep(customerStep + 1)}
        show={customerStep === 1}
      />

      <CustomerStep2
        show={customerStep === 2}
        photo={customerPhoto}
        onPhoto={(value) => setCustomerPhoto(value)}
        onBack={() => setCustomerStep(customerStep - 1)}
        onSubmit={() => handleCreateCustomer()}
      />

      <VendorStep1
        email={vendorEmail}
        onEmail={(value) => setVendorEmail(value)}
        phone={vendorPhone}
        onPhone={(value) => setVendorPhone(value)}
        shopName={vendorShopName}
        onShopName={(value) => setVendorShopName(value)}
        onBack={() => setVendorStep(vendorStep - 1)}
        onNext={() => setVendorStep(vendorStep + 1)}
        show={vendorStep === 1}
      />

      <VendorStep2
        description={vendorDescription}
        onDescription={(value) => setVendorDescription(value)}
        location={vendorLocation}
        onLocation={(value) => setVendorLocation(value)}
        coverPhoto={vendorCoverPhoto}
        onCoverPhoto={(value) => setVendorCoverPhoto(value)}
        logo={vendorLogo}
        onLogo={(value) => setVendorLogo(value)}
        onBack={() => setVendorStep(vendorStep - 1)}
        onSubmit={() => handleCreateVendor()}
        show={vendorStep === 2}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps, {checkNetworkStatus, setStorage})(
  CreateProfileScreen,
);
