import React from 'react';
import {View} from 'react-native';
import {Text, Spacer, Icon, ListItem, Avatar} from './common';
import {primaryColor, success, warning, danger} from './common/variables';
import {formatMoney} from '../utils';

const Order = ({name, itemPrice, quantity, onClick, status, image}) => {
  let icon = '';
  let statusColor = success;
  let statusLabel = 'delivered';

  switch (status) {
    case 'success':
      icon = 'md-checkmark';
      statusLabel = 'delivered';
      statusColor = success;
      break;
    case 'warning':
      icon = 'md-time';
      statusLabel = 'processing';
      statusColor = warning;
      break;
    case 'danger':
      icon = 'md-close';
      statusLabel = 'declined';
      statusColor = danger;
      break;
    case 'waiting':
      icon = 'ios-more';
      statusLabel = 'shipping';
      statusColor = primaryColor;
      break;
    default:
      icon = 'md-checkmark';
      statusColor = success;
      statusLabel = 'delivered';
      break;
  }

  return (
    <>
      <ListItem
        onClick={onClick}
        left={
          <>
            <Avatar src={image} large />
          </>
        }
        body={
          <>
            <Text numberOfLines={1}>{name}</Text>
            <Text note>Value: {formatMoney(itemPrice)}</Text>
            {/* <Text note>Date: {date}</Text> */}
            <Text note>Quantity: {quantity}</Text>
          </>
        }
        right={
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon size={16} name={icon} color={statusColor} />
            <Spacer size={2} />
            <Text color={statusColor}>{statusLabel}</Text>
          </View>
        }
      />
    </>
  );
};

export default Order;
