import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  Icon,
  ListItem,
  Clickable,
  TextInput,
  Column,
  Row,
} from './common';
import Avater from './Avatar';
import {info, primaryColor, inactiveColor} from './common/variables';
import {formatMoney} from '../utils';

const CartItem = ({
  onClick,
  price,
  shipping,
  quantity,
  discount,
  name,
  image,
  hideCloseButton,
  onCloseButtonClick,
  onQuantityChange,
  quantityError,
}) => {
  return (
    <View>
      <ListItem
        onClick={onClick}
        left={<Avater src={image} size={85} />}
        body={
          <>
            {name && <Text heading>{name}</Text>}
            {shipping && (
              <Text note>
                Shipping:{' '}
                <Text note color={info}>
                  {parseInt(shipping) === 0 ? 'Free' : formatMoney(shipping)}
                </Text>
              </Text>
            )}
            {discount && (
              <Text note>
                Discount:{' '}
                <Text note color={primaryColor}>
                  - {formatMoney(discount)}
                </Text>
              </Text>
            )}
            {quantity && (
              <Row style={{alignItems: 'center'}}>
                <Column size="2">
                  <Text note>QTY: </Text>
                </Column>
                <Column size="10">
                  <TextInput
                    style={{
                      zIndex: 99999999999,
                      height: 32,
                      padding: 0,
                      borderColor: quantityError ? 'red' : inactiveColor,
                    }}
                    placeholder="Quantity"
                    value={`${quantity}`}
                    onChangeText={onQuantityChange}
                    keyboardType="number-pad"
                  />
                </Column>
              </Row>
            )}
          </>
        }
        right={
          <View style={{alignItems: 'flex-end'}}>
            {!hideCloseButton && (
              <Clickable onClick={onCloseButtonClick}>
                <Icon name="md-close" />
              </Clickable>
            )}
            {price && parseInt(discount) > 0 && (
              <Text textDecoration="lineThrough" note color={primaryColor}>
                {formatMoney(price)}
              </Text>
            )}
            {price && parseInt(discount) > 0 && (
              <Text note>{formatMoney(price - parseInt(discount))}</Text>
            )}
            {price && parseInt(discount) === 0 && (
              <Text>{formatMoney(price)}</Text>
            )}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
