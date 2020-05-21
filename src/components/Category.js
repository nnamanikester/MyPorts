import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Text} from './common';

const Category = ({title, subtitle, image}) => {
  return (
    <View container>
      <Card>
        <View style={styles.content}>
          <Text color="#fff" h2>
            {title}
          </Text>
          <Text color="#fff">{subtitle}</Text>
        </View>
        <View style={styles.imageContanier}>
          <View style={styles.overalay} />
          <Image style={styles.image} source={image} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  content: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overalay: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 10,
    opacity: 0.5,
  },
});

export default Category;
