import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Layout, Icon, Link} from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import {female4} from '../../assets/images';

const VendorShopReviewScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Shop and Smile"
        subtitle="Ratings and Reviews"
        headerLeft={
          <Link onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
          </Link>
        }
      />
      <Layout>
        <View style={styles.container}>
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
            date="02/03/2020"
          />
          <Comment
            name="John Kester"
            comment="Similique molestiae placeat qui molestias voluptate. Autem autem aut quo nobis officia illum deleniti omnis dolorum."
            image={female4}
            s4={3}
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

export default VendorShopReviewScreen;
