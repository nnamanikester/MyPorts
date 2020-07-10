import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Card, Text, Clickable} from './common';
import {} from 'react-native-gesture-handler';

const Category = ({title, onClick, subtitle, image}) => {
  return (
    <View style={styles.container}>
      <Clickable onClick={onClick}>
        <Card style={{height: 150}}>
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
      </Clickable>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  content: {
    position: 'absolute',
    zIndex: 10,
    width: '100%',
    height: 150,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overalay: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: 150,
    backgroundColor: '#000',
    borderRadius: 5,
    opacity: 0.5,
  },
});

export default Category;
