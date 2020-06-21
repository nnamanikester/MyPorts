import React, { useState } from 'react';
import { Link, Text, Layout } from '../../components/common';

const CreateProfileScreen = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Layout>
        <Text>CreateProfile Screen</Text>
      </Layout>
    </>
  );
};

export default CreateProfileScreen;
