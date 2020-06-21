import React, { useState } from 'react';
import { Link, Text, Layout } from '../../components/common';
import CustomerStep1 from './customerSteps/CustomerStep1';
import CustomerStep2 from './customerSteps/CustomerStep2';
import VendorStep1 from './vendorSteps/VendorStep1';
import VendorStep2 from './vendorSteps/VendorStep2';
import CreateProfileInitial from './CreateProfileInitial';

const CreateProfileScreen = () => {
  const [step, setStep] = useState(0);

  return (
    <>
      <Layout>
        <Text>CreateProfile Screen</Text>
      </Layout>
    </>
  );
};

export default CreateProfileScreen;
