import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  Card,
  Spacer,
  Icon,
  Divider,
  Row,
  Clickable,
  ListItem,
  Avatar,
} from './common';
import {primaryColor, info, success, warning, danger} from './common/variables';
import {image1} from '../assets/images';

const Order = ({
  orderNo,
  vendor,
  itemPrice,
  date,
  quantity,
  onClick,
  status,
}) => {
  let icon = '';
  let statusColor = success;
  let statusLabel = 'Delivered';

  switch (status) {
    case 'success':
      icon = 'md-checkmark';
      statusLabel = 'Delivered';
      statusColor = success;
      break;
    case 'warning':
      icon = 'md-time';
      statusLabel = 'Pending';
      statusColor = warning;
      break;
    case 'danger':
      icon = 'md-close';
      statusLabel = 'Cancelled';
      statusColor = danger;
      break;
    case 'waiting':
      icon = 'ios-more';
      statusLabel = 'Shipping';
      statusColor = primaryColor;
      break;
    default:
      icon = 'md-checkmark';
      statusColor = success;
      statusLabel = 'Delivered';
      break;
  }

  return (
    <>
      <ListItem
        onClick={onClick}
        left={
          <>
            <Avatar src={image1} large />
          </>
        }
        body={
          <>
            <Text>Order No {orderNo}</Text>
            <Text note>Value: NGN {itemPrice}</Text>
            <Text note>Date: {date}</Text>
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

const styles = StyleSheet.create({});

export default Order;
