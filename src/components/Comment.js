import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Spacer, Rating, Divider, Clickable, Icon} from './common';
import Avatar from './Avatar';
import {primaryColor} from './common/variables';

const Comment = ({
  name,
  rating,
  date,
  image,
  comment,
  onCommentClick,
  showEdit,
  onEditClick,
}) => {
  return (
    <Clickable onClick={onCommentClick} style={styles.container}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar rounded src={image} />
          <Spacer medium />
          <Text heading>{name}</Text>
        </View>
        <Spacer />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {rating && <Rating value={rating} size={15} />}
          <Spacer />
          <Text note>{date}</Text>
          <Spacer />
          {showEdit && (
            <Clickable onClick={onEditClick}>
              <Text note color={primaryColor}>
                Edit <Icon size={16} color={primaryColor} name="md-create" />
              </Text>
            </Clickable>
          )}
        </View>
      </View>
      <Spacer />
      <View style={styles.body}>
        <Text>{comment}</Text>
      </View>
      <Spacer />
      <Divider />
    </Clickable>
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
