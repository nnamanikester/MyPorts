import React from 'react';
import {connect} from 'react-redux';
import * as UI from '../components/common';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import {female1, female2, female3, male1} from '../assets/images';

const NotificationsScreen = ({navigation}) => {
  const offers = [
    {
      key: '1',
      heading: 'McDonald’s',
      desc: 'Your order has been shipped into your address',
      image: female1,
      isRead: false,
      time: '2 minutes ago',
    },
    {
      key: '2',
      heading: '20% offer from GG',
      desc: 'You got 20% voucher offer from your last cart',
      image: female2,
      isRead: true,
      time: '2 minutes ago',
    },
    {
      key: '3',
      heading: 'Get 10% cashback',
      desc: 'Get 10% cashback by inviting your friends on social',
      image: female3,
      isRead: false,
      time: '2 minutes ago',
    },
    {
      key: '4',
      heading: 'Burger King',
      desc: 'Your order has been shipped into your address',
      image: male1,
      isRead: true,
      time: '2 minutes ago',
    },
  ];

  return (
    <>
      <Header
        isCart
        title="Notifications"
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
        <UI.Spacer medium />

        <UI.Text h3>All Notifications</UI.Text>

        <UI.Spacer />

        {offers.map((o, i) => {
          return (
            <UI.ListItem
              key={o.key + i}
              marked={!o.isRead}
              right={<UI.Text note>{o.time}</UI.Text>}
              body={
                <>
                  <UI.Text heading>{o.heading}</UI.Text>
                  <UI.Text>{o.desc}</UI.Text>
                </>
              }
              left={<Avatar rounded src={o.image} />}
            />
          );
        })}

        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    customer: state.customer.profile,
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps)(NotificationsScreen);
