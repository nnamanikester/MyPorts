import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Layout, Spacer } from '../../../components/common';
import Comment from '../../../components/Comment';
import { female4 } from '../../../assets/images';

const UserComments = () => {
  return (
    <>
      <Layout>
        <Spacer />
        <View style={styles.container}>
          <Comment
            name="You - Black Leather Belt"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            date="02/03/2020"
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default UserComments;
