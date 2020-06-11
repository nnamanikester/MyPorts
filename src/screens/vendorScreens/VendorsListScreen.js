import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Layout,
  Text,
  Spacer,
  Icon,
  Card,
  Column,
  Row,
  ActionBar,
  Radio,
  Clickable,
} from '../../components/common';
import Header from '../../components/Header';
import VendorList from '../../components/VendorList';
import { StyleSheet, ScrollView, View } from 'react-native';
import { female1, female2, female3, male1 } from '../../assets/images';
import FeaturedVendor from '../../components/FeaturedVendor';
import SearchBar from '../../components/SearchBar';
import Permissions from '../../components/Permissions';

const VendorListScreen = ({ navigation }) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <ActionBar
        show={showSearchBar}
        onCloseButtonClick={() => setShowSearchBar(false)}>
        <Radio selected={2} data={[{ label: 'Date' }, { label: 'Month' }]} />
      </ActionBar>

      <Header
        isCart
        title="Vendors"
        headerLeft={
          <Clickable onClick={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
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
          <Permissions.Vendor>
            <Text style={styles.title}>Featured Vendors</Text>
          </Permissions.Vendor>
        </View>
        <ScrollView
          style={{ paddingLeft: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <FeaturedVendor
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female1}
            verified
          />
          <FeaturedVendor
            verified={false}
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female2}
          />
          <FeaturedVendor
            verified
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female3}
          />
          <FeaturedVendor
            verified={false}
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={male1}
          />
          <FeaturedVendor
            verified
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female2}
          />
        </ScrollView>

        <Spacer />
        <View style={styles.container}>
          <Row>
            <Column size="10">
              <Text style={styles.title}>All Vendors</Text>
            </Column>
            <Column size="2" style={{ alignItems: 'flex-end' }}>
              <Clickable onClick={() => setShowSearchBar(!showSearchBar)}>
                <Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
              </Clickable>
            </Column>
          </Row>

          {showSearchBar && (
            <View style={styles.searchBar}>
              <SearchBar placeholder="Search your favorite vendor" />
            </View>
          )}

          <VendorList
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female1}
            verified
          />
          <VendorList
            verified={false}
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={male1}
          />
          <VendorList
            verified
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female2}
          />
          <VendorList
            verified={false}
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female3}
          />
          <VendorList
            verified={false}
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={male1}
          />
          <VendorList
            verified
            onClick={() => navigation.navigate('VendorShop')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female1}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
  container: {
    marginHorizontal: 10,
    paddingTop: 10,
  },
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
});

export default VendorListScreen;
