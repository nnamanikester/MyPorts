import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Layout,
  Spacer,
  Text,
  Icon,
  ListItem,
  Row,
  Column,
} from '../components/common';
import Avatar from '../components/Avatar';
import Header from '../components/Header';
import Product from '../components/Product';
import {TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native';
import {
  female1,
  female2,
  female3,
  male1,
  bag1,
  shoe1,
  shoe2,
} from '../assets/images';
import {primaryColor} from '../components/common/variables';

const ProductsByCategoryScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      <Header
        hideHeader={hideHeader}
        title="Men"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </TouchableOpacity>
            <Spacer medium />
            <TouchableOpacity
              onPress={() => navigation.navigate('Search')}
              activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}>
        <View style={styles.container}>
          <View style={{paddingLeft: 15}}>
            <Text style={styles.title}>Men</Text>
          </View>
          <Spacer />
          <Row>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="89"
                image={female1}
                name="Water Proof Bag"
                vendor="Chiomy Styles"
              />
            </Column>
            <Column style={{alignItems: 'center'}} size="6">
              <Product
                quantity="14"
                image={male1}
                name="Table Spoon"
                vendor="Benson Utilities"
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                image={female2}
                name="Female belt holder"
                vendor="Genny Collections"
                quantity="31"
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="45"
                image={female3}
                name="Balenciaga Shoe"
                vendor="Chucks Ventiany"
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="15"
                image={shoe1}
                name="Adidas Shoe"
                vendor="Adidas"
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="20"
                image={female3}
                name="Nike Shoe"
                vendor="Nike"
              />
            </Column>
            <Column size="6" style={{alignItems: 'center'}}>
              <Product
                quantity="8"
                image={female3}
                name="Gucci Bag"
                vendor="Cossy Viantae"
              />
            </Column>
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
