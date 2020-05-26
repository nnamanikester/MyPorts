import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  Layout,
  Row,
  Icon,
  Spacer,
  Text,
  Divider,
  FloatButton,
  Badge,
  TextInput,
  Column,
} from '../../components/common';
import Header from '../../components/Header';
import {bag1, shoe1, female4, male1} from '../../assets/images';
import {
  grayColor,
  info,
  primaryColor,
  success,
} from '../../components/common/variables';
import {ScrollView} from 'react-native-gesture-handler';

const VendorShopScreen = ({navigation}) => {
  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <Header
        title="Tiana Rosser"
        headerLeft={
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" color="#fff" />
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
      <Layout style={styles.layout}>
        <View style={styles.header}>
          <View>
            <Image style={styles.coverImage} source={female4} />
          </View>
          <Row>
            <View>
              <View style={styles.logoContainer}>
                <Image style={styles.logo} source={male1} />
              </View>
            </View>
            <View style={styles.shopDetails}>
              <Spacer />
              <Text style={styles.shopTitle}> Tiana Rosser</Text>
              <Spacer />
              <Text style={styles.shopDescription}>
                I was part of something special. Eventually, you do.
              </Text>
            </View>
          </Row>
        </View>
        <View style={styles.container}>
          <Text h3>Vendor Shop Screen</Text>
        </View>
      </Layout>

      <View
        style={{
          ...styles.contact,
          width: openChat ? '100%' : 80,
          height: openChat ? '100%' : 80,
        }}>
        {openChat && (
          <View style={styles.chatArena}>
            <View style={styles.chatHeader}>
              <Image style={styles.chatPic} source={male1} />
              <Spacer medium />
              <View style={{flex: 1}}>
                <Text style={styles.chatTitle}>Shop and Smile</Text>
                <Text note color="#fff">
                  I was part of something special...
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setOpenChat(false)}
                activeOpacity={0.7}>
                <Icon name="md-close" size={36} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.chatBody}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.receiverText}>
                  Hello, What's up with you and your worts, I hope you're doin
                  good. Anyway's I wanted to ask how much you're selling my
                  favorite jwery. I meant the gold coloured one
                </Text>
                <Text style={styles.senderText}>
                  Ok, the last time I sold it to you was, 29k. Let's just stick
                  to the price
                </Text>
                <Text style={styles.receiverText}>
                  Ok, I just have 20k this time around
                </Text>
                <Text style={styles.senderText}>
                  Why not save up to 25k. That would be nicer
                </Text>
                <Text style={styles.receiverText}>Please take it</Text>
                <Text style={styles.senderText}>
                  Ok. are you gonna pay me later?
                </Text>
                <Text style={styles.receiverText}>
                  Oga, If say I get am, I go pay na. Abeg
                </Text>
                <Text style={styles.senderText}>
                  It's alrght, make the orders first.
                </Text>
                <Text style={styles.receiverText}>
                  Thanks boss! God bless... Reviewing your product na sure game
                  na!
                </Text>
                <Text style={styles.senderText}>You're welcome man!</Text>
              </ScrollView>
            </View>
            <View style={styles.chatFooter}>
              <Column size="9">
                <TextInput
                  style={styles.messageBox}
                  placeholder="Type a message..."
                  onFocus
                  multiline
                />
              </Column>
              <Spacer />
              <Column size="1">
                <FloatButton size="medium">
                  <Icon name="ios-send" color="#fff" />
                </FloatButton>
              </Column>
            </View>
          </View>
        )}
        <View style={styles.contactButton}>
          {!openChat && (
            <>
              <Badge color={success} />
              <FloatButton
                onClick={() => {
                  setOpenChat(true);
                }}
                size="medium"
                type="outline">
                <Icon name="ios-chatbubbles" color={primaryColor} />
              </FloatButton>
            </>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  coverImage: {
    width: '100%',
    height: 200,
  },
  layout: {
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 100,
  },
  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: grayColor,
  },
  logoContainer: {
    width: 80,
    height: 80,
    marginHorizontal: 30,
    position: 'relative',
    top: -30,
    elevation: 5,
  },
  shopTitle: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
  },
  shopDetails: {
    overflow: 'hidden',
    width: '60%',
  },
  shopDescription: {
    color: info,
    paddingLeft: 10,
  },
  contact: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    elevation: 222222,
    bottom: 0,
    right: 0,
  },
  contactButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    elevation: 99999999,
  },
  chatArena: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    backgroundColor: primaryColor,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    elevation: 5,
  },
  chatPic: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: grayColor,
    borderRadius: 100,
  },
  chatTitle: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
    color: '#fff',
  },
  chatBody: {
    padding: 10,
    paddingBottom: 150,
  },
  chatFooter: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  senderText: {
    color: '#fff',
    backgroundColor: primaryColor,
    width: '90%',
    maxWidth: '100%',
    padding: 10,
    fontFamily: 'SFPD-regular',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  receiverText: {
    borderWidth: 1,
    borderColor: primaryColor,
    maxWidth: '90%',
    padding: 10,
    fontFamily: 'SFPD-regular',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

export default VendorShopScreen;
