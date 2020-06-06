import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Button, Icon, Spacer, Rating} from './common';
import {primaryColor} from './common/variables';
import Avatar from './Avatar';

const Comment = ({name, s1, s2, s3, s4, s5, date, image, comment}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar rounded src={image} />
          <Spacer medium />
          <Text heading>{name}</Text>
        </View>
        <Spacer />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {(s1 || s2 || s3 || s4 || s5) && (
            <Rating s4={s4} s3={s3} s2={s2} s1={s1} s5={s5} size={15} />
          )}
          <Spacer />
          <Text note>{date}</Text>
        </View>
      </View>
      <Spacer />
      <View style={styles.body}>
        <Text>{comment}</Text>
      </View>
      <Spacer medium />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
  },
  body: {
    width: '100%',
  },
});

export default Comment;