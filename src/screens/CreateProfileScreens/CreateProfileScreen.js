import React, { useState } from 'react';
import CustomerStep1 from './customerSteps/CustomerStep1';
import CustomerStep2 from './customerSteps/CustomerStep2';
import VendorStep1 from './vendorSteps/VendorStep1';
import VendorStep2 from './vendorSteps/VendorStep2';
import CreateProfileInitial from './CreateProfileInitial';
import { connect } from 'react-redux';
import { checkNetworkStatus } from '../../redux/actions/NetworkActions';

const CreateProfileScreen = ({ checkNetworkStatus, offline }) => {
  const [customerStep, setCustomerStep] = useState(0);
  const [vendorStep, setVendorStep] = useState(0);

  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerPhoto, setCustomerPhoto] = useState('');

  const [vendorShopName, setVendorShopName] = useState('');
  const [vendorEmail, setVendorEmail] = useState('');
  const [vendorPhone, setVendorPhone] = useState('');
  const [vendorDescription, setVendorDescription] = useState('');
  const [vendorLogo, setVendorLogo] = useState('');
  const [vendorCoverPhoto, setVendorCoverPhoto] = useState('');

  return (
    <>
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
        onSubmit={() => {}}
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
        coverPhoto={vendorCoverPhoto}
        onCoverPhoto={(value) => setVendorCoverPhoto(value)}
        logo={vendorLogo}
        onLogo={(value) => setVendorLogo(value)}
        onBack={() => setVendorStep(vendorStep - 1)}
        onSubmit={() => {}}
        show={vendorStep === 2}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: state.network.isConnected,
  };
};

export default connect(null, { checkNetworkStatus })(CreateProfileScreen);
