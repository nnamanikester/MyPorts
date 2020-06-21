import React from 'react';
import { Layout, Text } from '../../../components/common';

const CustomerStep2 = ({ show }) => {
  if (!show) return null;
  return (
    <>
      <Layout>
        <Text> upload image </Text>
      </Layout>
    </>
  );
};

export default CustomerStep2;
