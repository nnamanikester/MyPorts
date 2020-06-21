import React from 'react';
import { Layout, Text } from '../../../components/common';

const VendorStep2 = ({ show }) => {
  if (!show) return null;
  return (
    <>
      <Layout>
        <Text>description, logo, cover photo</Text>
      </Layout>
    </>
  );
};

export default VendorStep2;
