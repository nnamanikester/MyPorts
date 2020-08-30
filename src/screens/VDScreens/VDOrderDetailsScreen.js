import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import {connect} from 'react-redux';
import moment from 'moment';

const VDOrderDetailsScreen = ({navigation, route: {params}}) => {
  const {order} = params;
  return (
    <>
      <Header
        title="Order Details"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <UI.Option
            icon={<UI.Icon name="md-more" color="#fff" />}
            options={[
              {label: 'Mark as Delivered', action: () => {}},
              {label: 'Report a problem', action: () => {}},
            ]}
          />
        }
      />
      <UI.Layout>
        <UI.Spacer medium />

        <View style={styles.container}>
          <UI.Text heading>
            Order placed: {moment(order.createdAt).format('MMMM DD, YYYY')}
          </UI.Text>

          <UI.Text>Tiana Rosser</UI.Text>
          <UI.Text>Suit 13 Romchi Plaza, Oneday Road.</UI.Text>
          <UI.Text>Enugu, Enugu State 400252.</UI.Text>
          <UI.Text>09044758394.</UI.Text>

          <CartItem
            name="Leather Show Bag"
            color="Red"
            size="XL"
            quantity="5"
            // image={female2}
            price="2,300"
            onClick={() => navigation.navigate('VDSingleProduct')}
            onCloseButtonClick={() => {}}
            hideCloseButton
          />
        </View>
        <UI.Spacer medium />

        <View style={styles.container}>
          <View style={styles.buttons}>
            <UI.Column size="6">
              <UI.Button type="ghost">Cancel</UI.Button>
            </UI.Column>
            <UI.Spacer />
            <UI.Column size="6">
              <UI.Button>
                <UI.Text color="#fff">Accept</UI.Text>
              </UI.Button>
            </UI.Column>
          </View>

          <UI.Spacer large />
          <UI.Spacer large />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps)(VDOrderDetailsScreen);
