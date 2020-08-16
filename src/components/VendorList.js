import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Text, Row, Icon, Spacer, Clickable} from './common';
import {primaryColor, info} from './common/variables';

const VendorList = ({name, location, image, onClick, verified}) => {
  return (
    <View>
      <Card style={styles.container}>
        <View style={styles.imageContanier}>
          <Image style={styles.image} source={image} />
        </View>
        <View style={styles.content}>
          <Row style={{justifyContent: 'space-between'}}>
            <View>
              <Text heading>
                {name} {'  '}
                {verified ? (
                  <Icon
                    size={16}
                    type="Octicons"
                    color={primaryColor}
                    name="verified"
                  />
                ) : null}
              </Text>
              <Text note>{location}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Clickable onClick={onClick}>
                <Row style={{alignItems: 'center'}}>
                  <Text color={primaryColor}>Shop Now</Text>
                  <Spacer size={2} />
                  <Icon
                    type="Feather"
                    name="shopping-cart"
                    color={primaryColor}
                    size={22}
                  />
                </Row>
              </Clickable>
            </View>
          </Row>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
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
    paddingHorizontal: 15,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  title: {
    fontSize: 18,
    fontFamily: 'SFPD-semi-bold',
  },
});

export default VendorList;
