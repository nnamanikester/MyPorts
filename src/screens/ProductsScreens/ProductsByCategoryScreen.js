import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Layout,
  Spacer,
  Text,
  Icon,
  Row,
  Column,
  Clickable,
} from '../../components/common';
import Avatar from '../../components/Avatar';
import Header from '../../components/Header';
import Product from '../../components/Product';
import {ScrollView, StyleSheet, View} from 'react-native';
import {
  female1,
  female2,
  female3,
  male1,
  bag1,
  shoe1,
  shoe2,
} from '../../assets/images';
import {primaryColor} from '../../components/common/variables';

const ProductsByCategoryScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      <Header
        isCart
        title="Category"
        headerLeft={
          <Clickable onClick={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={25} color="#fff" />
          </Clickable>
        }
        headerRight={
          <>
            <Clickable onClick={() => navigation.navigate('Cart')}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </Clickable>
            <Spacer medium />
            <Clickable onClick={() => navigation.navigate('Search')}>
              <Icon name="ios-search" color="#fff" />
            </Clickable>
          </>
        }
      />
      <Layout>
        <View style={styles.container}>
          <View style={{paddingLeft: 15}}>
            <Text style={styles.title}>Men</Text>
          </View>
          <Spacer />
          <Row style={{justifyContent: 'space-between'}}>
            <Product
              quantity="89"
              image={female1}
              name="Water Proof Bag"
              vendor="Chiomy Styles"
            />

            <Product
              quantity="14"
              image={male1}
              name="Table Spoon"
              vendor="Benson Utilities"
            />
            <Product
              image={female2}
              name="Female belt holder"
              vendor="Genny Collections"
              quantity="31"
            />
            <Product
              quantity="45"
              image={female3}
              name="Balenciaga Shoe"
              vendor="Chucks Ventiany"
            />
            <Product
              quantity="15"
              image={shoe1}
              name="Adidas Shoe"
              vendor="Adidas"
            />
            <Product
              quantity="20"
              image={female3}
              name="Nike Shoe"
              vendor="Nike"
            />
            <Product
              quantity="8"
              image={female3}
              name="Gucci Bag"
              vendor="Cossy Viantae"
            />
          </Row>
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default ProductsByCategoryScreen;
