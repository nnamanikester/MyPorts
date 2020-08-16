import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text, Row, Spacer, Clickable} from './common';

const FeaturedProduct = ({name, vendor, quantity, image, onClick}) => {
  return (
    <View style={styles.container}>
      <Clickable onClick={onClick}>
        <View style={styles.imageContanier}>
          <Image style={styles.image} source={image} />
        </View>
        {name && (
          <View style={styles.content}>
            <Text numberOfLines={1} style={styles.title}>
              {name}
            </Text>
            <Text numberOfLines={1} note>
              {vendor}
            </Text>
            <Row>
              {quantity && (
                <>
                  <Text style={styles.vendor}>Quantity:</Text>
                  <Spacer />
                  <Text style={styles.vendor}>{quantity}</Text>
                </>
              )}
            </Row>
          </View>
        )}
      </Clickable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2,
    marginRight: 10,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderRadius: 5,
  },
  content: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: 'SFPD-semi-bold',
    lineHeight: 20,
  },
  vendor: {
    fontSize: 15,
    lineHeight: 18,
    fontFamily: 'SFPD-regular',
  },
});

export default FeaturedProduct;
