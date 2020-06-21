import React, { useState } from 'react';
import { Link, Text, Layout } from '../../components/common';
import CustomerStep1 from './customerSteps/CustomerStep1';
import CustomerStep2 from './customerSteps/CustomerStep2';
import VendorStep1 from './vendorSteps/VendorStep1';
import VendorStep2 from './vendorSteps/VendorStep2';
import CreateProfileInitial from './CreateProfileInitial';

const CreateProfileScreen = () => {
  const [customerStep, setCustomerStep] = useState(0);
  const [vendorStep, setVendorStep] = useState(0);
  const [customerFirstName, setCustomerFirstName] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

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

      <CustomerStep2 show={customerStep === 2} />
      <VendorStep1
        onBack={() => setVendorStep(vendorStep - 1)}
        show={vendorStep === 1}
      />
      <VendorStep2 show={vendorStep === 2} />
    </>
  );
};

export default CreateProfileScreen;
