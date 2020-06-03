import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  ListItem,
  Spacer,
  TextInput,
  Row,
  Button,
  Divider,
  Loading,
} from './common';
import Avater from './Avatar';
import {info, primaryColor} from './common/variables';

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
          <View style={{alignItems: 'flex-end'}}>
            {!hideCloseButton && (
              <TouchableOpacity
                onPress={onCloseButtonClick}
                activeOpacity={0.7}>
                <Icon name="md-close" />
              </TouchableOpacity>
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
