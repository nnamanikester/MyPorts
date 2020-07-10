import React from 'react';
import {Text, Spacer, Row, Divider} from './common';
import {primaryColor} from './common/variables';

const OrderSummary = ({order, shipping, discount, total}) => {
  return (
    <>
      {order && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text heading>Order: </Text>
          <Text>NGN {order}</Text>
        </Row>
      )}

      <Spacer />

      {shipping && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text heading>Shipping: </Text>
          <Text>NGN {shipping}</Text>
        </Row>
      )}

      <Spacer />

      {discount && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text heading>Discount: </Text>
          <Text color={primaryColor}>- NGN {discount}</Text>
        </Row>
      )}

      <Spacer />
      <Divider />

      {total && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text bold>Total: </Text>
          <Text bold>NGN {total}</Text>
        </Row>
      )}
    </>
  );
};

export default OrderSummary;
