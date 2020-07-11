import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import VendorList from '../../components/VendorList';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
import {
  female1,
  female2,
  female3,
  male1,
  shoe1,
  shoe2,
  bag1,
} from '../../assets/images';
import FeaturedVendor from '../../components/FeaturedVendor';
import SearchBar from '../../components/SearchBar';
import Swiper from 'react-native-swiper';

const VendorListScreen = ({navigation}) => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <>
      <UI.ActionBar
        show={showSearchBar}
        onCloseButtonClick={() => setShowSearchBar(false)}>
        <UI.Radio selected={2} data={[{label: 'Date'}, {label: 'Month'}]} />
      </UI.ActionBar>

      <Header
        isCart
        title="Vendors"
        headerLeft={
          <UI.Clickable onClick={() => navigation.openDrawer()}>
            <UI.Icon name="ios-menu" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Cart')}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Clickable>
            <UI.Spacer medium />
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <Swiper
            paginationStyle={{bottom: 5}}
            animated
            autoplayTimeout={10}
            height={100}
            loop
            autoplay>
            <UI.Clickable>
              <Image style={styles.advert} source={shoe1} />
            </UI.Clickable>
            <UI.Clickable>
              <Image style={styles.advert} source={shoe2} />
            </UI.Clickable>
            <UI.Clickable>
              <Image style={styles.advert} source={bag1} />
            </UI.Clickable>
            <UI.Clickable>
              <Image style={styles.advert} source={female3} />
            </UI.Clickable>
          </Swiper>
        </View>

        <View style={styles.container}>
          <UI.Text style={styles.title}>Featured Vendors</UI.Text>
        </View>
        <ScrollView
          style={{paddingLeft: 10}}
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

        <UI.Spacer />
        <View style={styles.container}>
          <UI.Row>
            <UI.Column size="10">
              <UI.Text style={styles.title}>All Vendors</UI.Text>
            </UI.Column>
            <UI.Column size="2" style={{alignItems: 'flex-end'}}>
              <UI.Clickable onClick={() => setShowSearchBar(!showSearchBar)}>
                <UI.Icon name={showSearchBar ? 'md-close' : 'ios-search'} />
              </UI.Clickable>
            </UI.Column>
          </UI.Row>

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
        </View>
      </UI.Layout>
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
  advert: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(VendorListScreen);
