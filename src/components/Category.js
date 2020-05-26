import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Card, Text} from './common';
import {} from 'react-native-gesture-handler';

const Category = ({title, onClick, subtitle, image}) => {
  return (
    <View container>
      <TouchableOpacity onPress={onClick} activeOpacity={0.9}>
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
      </TouchableOpacity>
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
    borderRadius: 5,
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
    borderRadius: 5,
    opacity: 0.5,
  },
});

export default Category;