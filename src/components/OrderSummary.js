import React from 'react';
import {Text, Spacer, Row, Divider} from './common';
import {primaryColor} from './common/variables';
import {formatMoney} from '../utils';

const OrderSummary = ({order, shipping, discount, total}) => {
  return (
    <>
      {order && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text heading>Order: </Text>
          <Text>{formatMoney(order)}</Text>
        </Row>
      )}

      <Spacer />

      {shipping && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text heading>Shipping: </Text>
          <Text>{formatMoney(shipping)}</Text>
        </Row>
      )}

      <Spacer />

      {discount && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text heading>Discount: </Text>
          <Text color={primaryColor}>- {formatMoney(discount)}</Text>
        </Row>
      )}

      <Spacer />
      <Divider />

      {total && (
        <Row style={{justifyContent: 'space-between'}}>
          <Text bold>Total: </Text>
          <Text bold>{formatMoney(total)}</Text>
        </Row>
      )}
    </>
  );
};

export default OrderSummary;
