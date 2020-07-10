import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Clickable} from './common';

const Product = ({name, vendor, quantity, image, onClick}) => {
  return (
    <View style={styles.container}>
      <Clickable onClick={onClick}>
        <View style={styles.imageContanier}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.content}>
          <Text numberOfLines={1} heading>
            {name}
          </Text>
          <Text numberOfLines={1} style={styles.vendor}>
            Stock: {' ' + quantity}
          </Text>
          {vendor && (
            <Text numberOfLines={1} note>
              {vendor}
            </Text>
          )}
        </View>
      </Clickable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginBottom: 10,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: 120,
    borderRadius: 5,
  },
  content: {
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  vendor: {
    fontSize: 15,
  },
});

export default Product;
