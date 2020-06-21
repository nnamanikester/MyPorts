import React, { useState } from 'react';
import { Link, Text, Layout } from '../../components/common';
import CreateProfileInitial from './createProfileInitial';
import customerStep1 from './customerSteps/customerStep1';

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
