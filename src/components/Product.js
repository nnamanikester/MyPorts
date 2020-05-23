import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Card, Text, Button, Row, Icon, Column, Spacer} from './common';
import {primaryColor, info, inactiveColor} from './common/variables';

const Product = ({name, vendor, quantity, image, onClick}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} activeOpacity={0.9}>
        <View style={styles.imageContanier}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text note>{vendor}</Text>
          <Row>
            <Text style={styles.vendor}>Quantity:</Text>
            <Spacer />
            <Text style={styles.vendor}>{quantity}</Text>
          </Row>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    marginBottom: 10,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: 'SFPD-semi-bold',
  },
  vendor: {
    fontSize: 15,
    fontFamily: 'SFPD-regular',
  },
});

export default Product;
