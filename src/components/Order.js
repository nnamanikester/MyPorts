import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Card, Spacer, Icon, Divider, Row} from './common';
import {primaryColor, info, success, warning, danger} from './common/variables';

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
      statusLabel = 'In Progress';
      statusColor = warning;
      break;
    case 'danger':
      icon = 'md-close';
      statusLabel = 'Cancelled';
      statusColor = danger;
      break;
    case 'waiting':
      icon = 'ios-more';
      statusLabel = 'Waiting';
      statusColor = primaryColor;
      break;
    default:
      icon = 'md-checkmark';
      statusColor = success;
      statusLabel = 'Delivered';
      break;
  }

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onClick}>
      <Card style={{elevation: 3}}>
        <View style={styles.order}>
          <Spacer size={1} />
          <View style={styles.orderHeader}>
            <Row
              style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Icon size={20} name={icon} color={statusColor} />
                <Spacer />
                <Text color={statusColor}>{statusLabel.toUpperCase()}</Text>
              </View>
              <Text color={info}>{date}</Text>
            </Row>
          </View>
          <Divider />

          <View style={styles.orderBody}>
            <Text h1 color={primaryColor}>
              Order No {orderNo}
            </Text>
            <Spacer />
            <Row>
              <Text>Vendor : </Text>
              <Spacer />
              <Text color={info}>{vendor}</Text>
            </Row>
          </View>
          <Divider />

          <View style={styles.orderFooter}>
            <Row
              style={{justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <Text color={info}>Items' Value</Text>
                <Spacer />
                <Text bold>NGN {itemPrice}</Text>
              </View>
              <Text color={info}>
                Quantity: <Text bold>{quantity}</Text>
              </Text>
            </Row>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  order: {
    padding: 10,
  },
  orderHeader: {
    paddingHorizontal: 10,
    height: 25,
    justifyContent: 'center',
  },
  orderBody: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 75,
  },
  orderFooter: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default Order;
