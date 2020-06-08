import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, Row, Spacer, Clickable } from './common';

const FeaturedProduct = ({ name, vendor, quantity, image, onClick }) => {
  return (
    <View style={styles.container}>
      <Clickable onClick={onClick}>
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
      </Clickable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 10,
    marginBottom: 5,
    elevation: 0.2,
  },
  image: {
    width: '100%',
    height: 150,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  content: {
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

export default FeaturedProduct;
