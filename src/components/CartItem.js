import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon, ListItem, Spacer, Clickable } from './common';
import Avater from './Avatar';
import { info } from './common/variables';

const CartItem = ({
  onClick,
  price,
  size,
  color,
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
        left={<Avater src={image} size={100} />}
        body={
          <>
            {name && <Text heading>{name}</Text>}
            <Spacer />
            {size && (
              <Text>
                Size: <Text color={info}>{size}</Text>
              </Text>
            )}
            {color && (
              <Text>
                Color: <Text color={info}>{color}</Text>
              </Text>
            )}
            {quantity && (
              <Text>
                Quantity: <Text color={info}>{quantity}</Text>
              </Text>
            )}
          </>
        }
        right={
          <View style={{ alignItems: 'flex-end' }}>
            {!hideCloseButton && (
              <Clickable onCLick={onCloseButtonClick}>
                <Icon name="md-close" />
              </Clickable>
            )}
            <Spacer />
            {price && <Text>NGN {price}</Text>}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CartItem;
