import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  Layout,
  Text,
  Spacer,
  Icon,
  Card,
  Column,
  Row,
} from '../../components/common';
import Header from '../../components/Header';
import VendorList from '../../components/VendorList';
import {TouchableOpacity, StyleSheet, ScrollView, View} from 'react-native';
import {female1, female2, female3, male1} from '../../assets/images';
import FeaturedVendor from '../../components/FeaturedVendor';
import SearchBar from '../../components/SearchBar';

const VendorListScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <Header
        hideHeader={hideHeader}
        title="Vendors"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </TouchableOpacity>
            <Spacer />
            <TouchableOpacity activeOpacity={0.7}>
              <Icon name="ios-search" color="#fff" />
            </TouchableOpacity>
          </>
        }
      />
      <Layout
        onScrollDown={() => setHideHeader(false)}
        onScrollUp={() => setHideHeader(true)}>
        <View style={styles.container}>
          <Text style={styles.title}>Featured Vendors</Text>
        </View>
        <ScrollView
          style={{paddingLeft: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <FeaturedVendor
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female1}
          />
          <FeaturedVendor
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female2}
          />
          <FeaturedVendor
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female3}
          />
          <FeaturedVendor
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={male1}
          />
          <FeaturedVendor
            onClick={() => alert('Clicked')}
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
            <Column size="2" style={{alignItems: 'flex-end'}}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setShowSearchBar(!showSearchBar)}>
                <Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
              </TouchableOpacity>
            </Column>
          </Row>

          {showSearchBar && (
            <View style={styles.searchBar}>
              <SearchBar placeholder="Search your favorite vendor" />
            </View>
          )}

          <VendorList
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female1}
          />
          <VendorList
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={male1}
          />
          <VendorList
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female2}
          />
          <VendorList
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={female3}
          />
          <VendorList
            onClick={() => alert('Clicked')}
            location="Victoria Island, Lagos. Nigeria"
            name="Shop and Smile"
            image={male1}
          />
          <VendorList
            onClick={() => alert('Clicked')}
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
