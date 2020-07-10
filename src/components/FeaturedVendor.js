import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Text, Clickable, Icon} from './common';
import {primaryColor, info} from './common/variables';

const FeaturedVendor = ({name, location, image, onClick, verified}) => {
  return (
    <View>
      <Card style={styles.container}>
        <Clickable activeOpacity={0.99} onClick={onClick}>
          <View style={styles.imageContanier}>
            <Image style={styles.image} source={image} />
          </View>
          <View style={styles.content}>
            <Text heading style={styles.title}>
              {name}
              {'  '}
              {verified ? (
                <Icon
                  size={13}
                  type="Octicons"
                  color={primaryColor}
                  name="verified"
                />
              ) : (
                <Icon
                  size={13}
                  type="Octicons"
                  color={info}
                  name="unverified"
                />
              )}
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
    elevation: 0.2,
    width: 150,
    marginRight: 10,
    zIndex: 10,
  },
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
