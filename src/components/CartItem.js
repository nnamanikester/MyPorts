import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Icon, ListItem, Clickable} from './common';
import Avater from './Avatar';
import {
  info,
  primaryColor,
  inactiveColor,
  textColor,
  danger,
} from './common/variables';
import {formatMoney} from '../utils';

const CartItem = ({
  onClick,
  price,
  shipping,
  quantity,
  discount,
  name,
  image,
  amount,
  hideCloseButton,
  onCloseButtonClick,
  onQuantityChange,
  quantityError,
  stock,
}) => {
  return (
    <View>
      <ListItem
        onClick={stock === 0 ? null : onClick}
        left={<Avater src={image} size={85} />}
        body={
          <>
            {name && (
              <Text color={stock === 0 ? info : textColor} heading>
                {name}
              </Text>
            )}
            {shipping && (
              <Text color={stock === 0 ? inactiveColor : textColor} note>
                Shipping:{' '}
                <Text note color={stock === 0 ? inactiveColor : info}>
                  {parseInt(shipping) === 0 ? 'Free' : formatMoney(shipping)}
                </Text>
              </Text>
            )}
            {discount && (
              <Text color={stock === 0 ? inactiveColor : textColor} note>
                Discount:{' '}
                <Text note color={stock === 0 ? inactiveColor : primaryColor}>
                  - {formatMoney(discount)}
                </Text>
              </Text>
            )}
            {amount && (
              <Text note>
                Amount: <Text note>{formatMoney(amount)}</Text>
              </Text>
            )}
            {quantity && (
              <Text color={stock === 0 ? inactiveColor : textColor} note>
                Quantity:{' '}
                <Text note color={stock === 0 ? inactiveColor : info}>
                  {quantity}
                </Text>
              </Text>
              // <Row style={{alignItems: 'center'}}>
              //   <Column size="2">
              //     <Text note>QTY: </Text>
              //   </Column>
              //   <Column size="10">
              //     <TextInput
              //       style={{
              //         zIndex: 99999999999,
              //         height: 32,
              //         padding: 0,
              //         borderColor: quantityError ? 'red' : inactiveColor,
              //       }}
              //       placeholder="Quantity"
              //       value={`${quantity}`}
              //       onChangeText={onQuantityChange}
              //       keyboardType="number-pad"
              //     />
              //   </Column>
              // </Row>
            )}
          </>
        }
        right={
          <View style={{alignItems: 'flex-end'}}>
            {!hideCloseButton && (
              <Clickable onClick={onCloseButtonClick}>
                <Icon color={stock === 0 ? danger : info} name="md-close" />
              </Clickable>
            )}
            {price && parseInt(discount) > 0 && (
              <Text
                textDecoration="lineThrough"
                note
                color={stock === 0 ? inactiveColor : primaryColor}>
                {formatMoney(price)}
              </Text>
            )}
            {price && parseInt(discount) > 0 && (
              <Text color={stock === 0 ? inactiveColor : textColor} note>
                {formatMoney(price - parseInt(discount))}
              </Text>
            )}
            {price && parseInt(discount) === 0 && (
              <Text color={stock === 0 ? inactiveColor : textColor}>
                {formatMoney(price)}
              </Text>
            )}
          </View>
        }
      />
    </View>
  );
};

export default CartItem;
