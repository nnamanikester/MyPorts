import React from 'react';
import { Layout, Text, Button } from '../../../components/common';

const VendorStep1 = ({ show, onBack }) => {
  if (!show) return null;
  return (
    <>
      <Layout>
        <Text>shoop name, contact email, contact phone,</Text>
        <Button onClick={onBack}>GoBack</Button>
      </Layout>
    </>
  );
};

export default VendorStep1;
