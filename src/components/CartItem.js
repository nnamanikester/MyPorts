import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon, ListItem, Link } from './common';
import Avater from './Avatar';
import { info } from './common/variables';

const CartItem = ({
  onClick,
  price,
  shipping,
  quantity,
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
              <Text>
                Quantity: <Text color={info}>{quantity}</Text>
              </Text>
            )}
            {shipping && (
              <Text>
                Shipping: <Text color={info}>{shipping}</Text>
              </Text>
            )}
          </>
        }
        right={
          <View style={{ alignItems: 'flex-end' }}>
            {!hideCloseButton && (
              <Link onCLick={onCloseButtonClick}>
                <Icon name="md-close" />
              </Link>
            )}
            {price && <Text>NGN {price}</Text>}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
