import React, {useState} from 'react';
import {
  Layout,
  Spacer,
  Text,
  Icon,
  Column,
  Row,
  ListItem,
  Link,
} from '../components/common';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Product from '../components/Product';
import {TouchableOpacity, ScrollView, StyleSheet, View} from 'react-native';
import {
  female1,
  female2,
  bag1,
  female3,
  male1,
  shoe2,
  shoe1,
} from '../assets/images';
import FeaturedProduct from '../components/FeaturedProduct';

const SearchScreen = ({navigation}) => {
  const [keyword, setKeyword] = useState('');
  const [searching, setSearching] = useState(false);

  const handleSearch = (val) => {
    if (!searching) setSearching(true);
    setKeyword(val);
  };

  return (
    <>
      <Header
        title="Search"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout itemToFloat={1}>
        <View style={styles.searchBar}>
          <SearchBar
            onChangeText={handleSearch}
            value={keyword}
            placeholder="What are you looking for?"
          />

          <Spacer medium />

          {!searching && (
            <View>
              <Row>
                <Column size="10">
                  <Text heading>Recent Searches</Text>
                </Column>
                <Column size="2" style={{alignItems: 'flex-end'}}>
                  <Link>View All</Link>
                </Column>
              </Row>

              <ListItem
                onClick={() => setKeyword('Men Cloths')}
                body={<Text>Men Cloths</Text>}
              />
              <ListItem
                onClick={() => setKeyword('Piano')}
                body={<Text>Piano</Text>}
              />
              <ListItem
                onClick={() => setKeyword('Black Board')}
                body={<Text>Black Board</Text>}
              />
              <ListItem
                onClick={() => setKeyword('Baby Toys')}
                body={<Text>Baby Toys</Text>}
              />

              <Spacer medium />

              <Row>
                <Column size="10">
                  <Text heading>Recommended for you</Text>
                </Column>
                <Column size="2" style={{alignItems: 'flex-end'}}>
                  <Link>View All</Link>
                </Column>
              </Row>

              <Spacer medium />

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <FeaturedProduct
                  image={bag1}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <FeaturedProduct
                  image={shoe1}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <FeaturedProduct
                  image={shoe2}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <FeaturedProduct
                  image={female2}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
                <FeaturedProduct
                  image={female3}
                  onClick={() => navigation.navigate('SingleProduct')}
                />
              </ScrollView>
            </View>
          )}

          {searching && (
            <View>
              <Row>
                <Column size="6" style={{alignItems: 'center'}}>
                  <Product
                    quantity="89"
                    image={female1}
                    name="Water Proof Bag"
                    vendor="Chiomy Styles"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
                <Column style={{alignItems: 'center'}} size="6">
                  <Product
                    quantity="14"
                    image={male1}
                    name="Table Spoon"
                    vendor="Benson Utilities"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
                <Column size="6" style={{alignItems: 'center'}}>
                  <Product
                    image={female2}
                    name="Female belt holder"
                    vendor="Genny Collections"
                    quantity="31"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
                <Column size="6" style={{alignItems: 'center'}}>
                  <Product
                    quantity="45"
                    image={female3}
                    name="Balenciaga Shoe"
                    vendor="Chucks Ventiany"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
                <Column size="6" style={{alignItems: 'center'}}>
                  <Product
                    quantity="15"
                    image={shoe1}
                    name="Adidas Shoe"
                    vendor="Adidas"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
                <Column size="6" style={{alignItems: 'center'}}>
                  <Product
                    quantity="20"
                    image={female3}
                    name="Nike Shoe"
                    vendor="Nike"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
                <Column size="6" style={{alignItems: 'center'}}>
                  <Product
                    quantity="8"
                    image={female3}
                    name="Gucci Bag"
                    vendor="Cossy Viantae"
                    onClick={() => navigation.navigate('SingleProduct')}
                  />
                </Column>
              </Row>
            </View>
          )}
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default SearchScreen;
