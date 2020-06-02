import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Card, Text, Button, Row, Icon, Column, Spacer} from './common';
import {primaryColor, info, inactiveColor} from './common/variables';

const FeaturedProduct = ({name, vendor, quantity, image, onClick}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick} activeOpacity={0.9}>
        <View style={styles.imageContanier}>
          <Image style={styles.image} source={image} />
        </View>
        {name && (
          <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <Text note>{vendor}</Text>
            <Row>
              {quantity && (
                <>
                  <Text style={styles.vendor}>Quantity:</Text>
                  <Spacer />
                  <Text style={styles.vendor}>{quantity}</Text>
                </>
              )}
            </Row>
            <Row></Row>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 5,
    elevation: 1,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 10,
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

export default FeaturedProduct;
