import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text, Clickable } from './common';

const FeaturedVendor = ({ name, location, image, onClick }) => {
  return (
    <View>
      <Card style={styles.container}>
        <Clickable onClick={onClick}>
          <View style={styles.imageContanier}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.content}>
            <Text heading style={styles.title}>
              {name}
            </Text>
            <Text note>{location}</Text>
          </View>
        </Clickable>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    elevation: 2,
    width: 160,
    marginRight: 10,
    zIndex: 10,
  },
  imageContainer: {},
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  content: {
    zIndex: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    height: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'SFPD-semi-bold',
  },
});

export default FeaturedVendor;
