import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Layout, Text, Icon, Spacer, ListItem} from '../components/common';
import Header from '../components/Header';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {primaryColor, grayColor, info} from '../components/common/variables';

const SettingsScreen = ({navigation}) => {
  const [hideHeader, setHideHeader] = useState(false);

  return (
    <>
      <Header
        hideHeader={hideHeader}
        title="Privacy and Settings"
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
        onScrollUp={() => setHideHeader(true)}
        itemToFloat={1}>
        <View style={styles.container}>
          <Text color={primaryColor} style={styles.title}>
            Account
          </Text>

          <ListItem
            body={<Text size={17}>Manage My Account</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            left={<Icon color={info} name="ios-person" />}
          />
          <ListItem
            body={<Text size={17}>Privacy and Safety</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            left={<Icon color={info} type="Feather" name="shield" />}
          />
          <ListItem
            body={<Text size={17}>My Balance</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
            left={<Icon color={info} name="ios-card" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Preferences
          </Text>
          <ListItem
            body={<Text size={17}>Support</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            body={<Text size={17}>Help</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            body={<Text size={17}>FAQ</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />

          <Spacer medium />

          <Text color={primaryColor} style={styles.title}>
            Support
          </Text>

          <ListItem
            body={<Text size={17}>Support</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            body={<Text size={17}>Help</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <ListItem
            body={<Text size={17}>FAQ</Text>}
            right={<Icon size={20} color={info} name="ios-arrow-forward" />}
          />
          <Spacer large />
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

export default SettingsScreen;
