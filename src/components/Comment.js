import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Spacer, Rating, Divider} from './common';

import Avatar from './Avatar';

const Comment = ({name, s1, s2, s3, s4, s5, date, image, comment}) => {
  return (
    <View style={styles.container}>
      <View>
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
      <Spacer />
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  body: {
    width: '100%',
  },
});

export default Comment;
