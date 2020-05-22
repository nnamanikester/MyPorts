import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Text, Button, Row, Icon, Column, Spacer} from './common';
import {primaryColor} from './common/variables';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FeaturedVendor = ({name, location, image, onClick}) => {
  return (
    <View>
      <Card style={styles.container}>
        <View style={styles.imageContanier}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.content}>
          <Row>
            <Column size="8">
              <Text heading style={styles.title}>
                {name}
              </Text>
              <Text note>{location}</Text>
            </Column>
            <Column size="4" style={{justifyContent: 'center'}}>
              <TouchableOpacity onPress={onClick} activeOpacity={0.7}>
                <Row>
                  <Text color={primaryColor}>Shop Now</Text>
                  <Spacer />
                  <Icon
                    type="Feather"
                    name="shopping-cart"
                    color={primaryColor}
                    size={25}
                  />
                </Row>
              </TouchableOpacity>
            </Column>
          </Row>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    elevation: 5,
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
    fontSize: 18,
    fontFamily: 'SFPD-semi-regular',
  },
});

export default FeaturedVendor;
