import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import {
  Layout,
  Icon,
  Text,
  ListItem,
  Spacer,
  Column,
  Row,
} from '../components/common';
import Header from '../components/Header';
import Avatar from '../components/Avatar';
import {female1, female2, female3, male1} from '../assets/images';

const NotificationsScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);
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
  const activities = [
    {
      key: '1',
      heading: 'Claudia',
      desc: 'sent you a message',
      image: female1,
      time: '2 minutes ago',
    },
    {
      key: '2',
      heading: 'Katharina',
      desc: 'lked your photo',
      image: female2,
      time: '2 minutes ago',
    },
    {
      key: '3',
      heading: 'Tomas',
      desc: 'asked to join a group',
      image: female3,
      time: '2 minutes ago',
    },
    {
      key: '4',
      heading: 'Manuel',
      desc: 'sent you a message',
      image: male1,
      time: '2 minutes ago',
    },
  ];

  return (
    <>
      <Header
        isCart
        title="Notifications"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </TouchableOpacity>
        }
        headerRight={
          <>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              activeOpacity={0.7}>
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

      <Layout>
        <View style={styles.container}>
          <Text style={styles.title}>Offers</Text>

          <Spacer />

          <FlatList
            data={offers}
            renderItem={({item}) => (
              <ListItem
                marked={!item.isRead}
                right={<Text note>{item.time}</Text>}
                body={
                  <>
                    <Text heading>{item.heading}</Text>
                    <Text>{item.desc}</Text>
                  </>
                }
                left={<Avatar rounded src={item.image} />}
              />
            )}
          />

          <Spacer medium />

          <Text style={styles.title}>Activity</Text>

          <FlatList
            data={activities}
            renderItem={({item}) => {
              <ListItem
                body={
                  <>
                    <Row>
                      <Text heading>{item.heading}</Text>
                      <Spacer horizontal />
                      <Text>{item.desc}</Text>
                    </Row>
                    <Text note>{item.time}</Text>
                  </>
                }
                left={<Avatar rounded src={item.image} />}
              />;
            }}
          />

          <ListItem
            body={
              <>
                <Row>
                  <Text heading>John Kester</Text>
                  <Spacer horizontal />
                  <Text>sent you a message</Text>
                </Row>
                <Text note>2 minutes ago</Text>
              </>
            }
            left={<Avatar rounded src={female1} />}
          />

          <ListItem
            body={
              <>
                <Row>
                  <Text heading>John Kester</Text>
                  <Spacer horizontal />
                  <Text>sent you a message</Text>
                </Row>
                <Text note>2 minutes ago</Text>
              </>
            }
            left={<Avatar rounded src={female1} />}
          />

          <ListItem
            body={
              <>
                <Row>
                  <Text heading>John Kester</Text>
                  <Spacer horizontal />
                  <Text>sent you a message</Text>
                </Row>
                <Text note>2 minutes ago</Text>
              </>
            }
            left={<Avatar rounded src={female1} />}
          />

          <ListItem
            body={
              <>
                <Row>
                  <Text heading>John Kester</Text>
                  <Spacer horizontal />
                  <Text>sent you a message</Text>
                </Row>
                <Text note>2 minutes ago</Text>
              </>
            }
            left={<Avatar rounded src={female1} />}
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'SFPD-regular',
  },
});

export default NotificationsScreen;
