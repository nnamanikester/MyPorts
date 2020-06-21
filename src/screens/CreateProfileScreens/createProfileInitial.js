import React from 'react';
import { Layout, Text, Button, Spacer } from '../../components/common';

const CreateProfileInitial = ({ onVendor, onCustomer, show }) => {
  if (!show) return null;

  return (
    <>
      <Layout>
        <Text>CreateProfile Initial</Text>
        <Button onClick={onCustomer}>
          <Text>Continue as a Buyer</Text>
        </Button>
        <Spacer />
        <Button onClick={onVendor}>
          <Text>Continue as a vendor</Text>
        </Button>
      </Layout>
    </>
  );
};

export default CreateProfileInitial;
