import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import {
  inactiveColor,
  primaryColor,
  grayColor,
} from '../../components/common/variables';

const ReferAndEarnScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="Refer And Earn"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Option
              options={[{label: 'Exit', action: () => {}}]}
              icon={<UI.Icon name="ios-more" color="#fff" />}
            />
          </>
        }
      />
      <UI.Layout>
        <View style={styles.container}>
          <UI.Card style={styles.card}>
            <UI.Text h3>Refer Friends and earn NGN 500 MyPorts Cash!</UI.Text>

            <UI.Spacer medium />

            <UI.Icon name="ios-gift" size={80} color={primaryColor} />

            <UI.Spacer medium />

            <UI.Text>
              Receive NGN 500 MyPorts Cash for ewach referral after their first
              other ships. Earn Up to NGN 20,000 every month!
            </UI.Text>

            <UI.Spacer medium />

            <UI.TextInput
              type="disabled"
              value="47HD74HD"
              iconRight={
                <UI.Row>
                  <UI.Clickable style={styles.share}>
                    <UI.Icon name="md-share" color="#fff" />
                  </UI.Clickable>
                </UI.Row>
              }
            />
          </UI.Card>

          <UI.Card style={styles.card}>
            <UI.Text h3 style={{alignSelf: 'flex-start'}}>
              MyPorts Cash Earned: NGN 0.00
            </UI.Text>

            <UI.Spacer medium />

            <UI.Row style={styles.heading}>
              <UI.Column size="8">
                <UI.Text note bold>
                  Referrals
                </UI.Text>
              </UI.Column>

              <UI.Column size="4">
                <UI.Text note bold>
                  Status
                </UI.Text>
              </UI.Column>
            </UI.Row>

            {/* REFERRALS HERE */}
            {/* <UI.Row style={styles.body}>
              <UI.Column size="8">
                <UI.Text note>John Kester</UI.Text>
              </UI.Column>

              <UI.Column size="4">
                <UI.Text note>Registered</UI.Text>
              </UI.Column>
            </UI.Row> */}

            <UI.Text style={{marginTop: 10}}>
              No referral yet. Invite your friends to earn.
            </UI.Text>
          </UI.Card>
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    elevation: 1,
    borderWidth: 1,
    borderColor: inactiveColor,
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  share: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    marginRight: -15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  heading: {
    backgroundColor: grayColor,
    width: '110%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  body: {
    width: '110%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: inactiveColor,
  },
});

export default ReferAndEarnScreen;
