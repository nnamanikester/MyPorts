import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  Layout,
  Icon,
  Row,
  Spacer,
  Divider,
  Link,
  FAB,
  TextInput,
  Rating,
  Button,
  Modal,
} from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import {female4} from '../../assets/images';

const VendorShopReviewScreen = ({navigation}) => {
  const [openModal, setOpenModal] = useState(false);

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
      <FAB onClick={() => setOpenModal(true)} size={60}>
        <Icon color="#fff" name="md-create" />
      </FAB>

      <Modal show={openModal}>
        <Text heading>Write a Review</Text>
        <Spacer medium />
        <Rating />
        <Spacer medium />
        <View style={{width: '100%'}}>
          <TextInput placeholder="Comment..." autoFocus multiline />
        </View>
        <Divider />
        <Row style={{justifyContent: 'space-between'}}>
          <Button onClick={() => setOpenModal(false)} size="small" type="ghost">
            Cancel
          </Button>
          <Spacer />
          <Button onClick={() => setOpenModal(false)} size="small">
            <Text color="#fff">Submit</Text>
          </Button>
        </Row>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default VendorShopReviewScreen;
