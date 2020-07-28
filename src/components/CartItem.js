import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Icon, ListItem, Link} from './common';
import Avater from './Avatar';
import {info, primaryColor} from './common/variables';
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
}) => {
  return (
    <View>
      <ListItem
        onClick={onClick}
        left={<Avater src={image} large />}
        body={
          <>
            {name && <Text heading>{name}</Text>}
            {quantity && (
              <Text note>
                Quantity:{' '}
                <Text note color={info}>
                  {quantity}
                </Text>
              </Text>
            )}
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
          </>
        }
        right={
          <View style={{alignItems: 'flex-end'}}>
            {!hideCloseButton && (
              <Link onCLick={onCloseButtonClick}>
                <Icon name="md-close" />
              </Link>
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
