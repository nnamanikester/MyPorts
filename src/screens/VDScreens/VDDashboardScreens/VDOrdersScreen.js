import React from 'react';
import * as UI from '../../../components/common';
import {View, StyleSheet} from 'react-native';
import {
  primaryColor,
  success,
  danger,
  info,
} from '../../../components/common/variables';
import {food3} from '../../../assets/images';

const VDAccountSettingsScreen = ({navigation}) => {
  return (
    <>
      <UI.Layout>
        <UI.Spacer />
        <UI.ListItem
          marked
          onClick={() => navigation.navigate('VDOrderDetails')}
          left={<UI.Avatar medium rounded src={food3} />}
          body={
            <>
              <UI.Text heading>Order No 9875934734</UI.Text>
              <UI.Text numberOfLines={1} color="" note>
                Enugu, John Kester.
              </UI.Text>
            </>
          }
          right={
            <View style={{justifyContent: 'center', flex: 1}}>
              <UI.Text color={success} note style={styles.status}>
                New
              </UI.Text>
            </View>
          }
        />
        <UI.Spacer />
        <UI.ListItem
          onClick={() => navigation.navigate('VDOrderDetails')}
          left={<UI.Avatar medium rounded src={food3} />}
          body={
            <>
              <UI.Text color={info} heading>
                Order No 9875934734
              </UI.Text>
              <UI.Text numberOfLines={1} color="" note>
                Benin, Ben Kennedy.
              </UI.Text>
            </>
          }
          right={
            <View style={{justifyContent: 'center', flex: 1}}>
              <UI.Text color={danger} note style={styles.status}>
                Cancelled
              </UI.Text>
            </View>
          }
        />
        <UI.Spacer />
        <UI.ListItem
          onClick={() => navigation.navigate('VDOrderDetails')}
          left={<UI.Avatar medium rounded src={food3} />}
          body={
            <>
              <UI.Text color={info} heading>
                Order No 9875934734
              </UI.Text>
              <UI.Text numberOfLines={1} color="" note>
                Lagos, Mary Chucks.
              </UI.Text>
            </>
          }
          right={
            <View style={{justifyContent: 'center', flex: 1}}>
              <UI.Text color="" note style={styles.status}>
                Delivered
              </UI.Text>
            </View>
          }
        />
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  listIcon: {
    backgroundColor: primaryColor,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  status: {
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: '700',
  },
});

export default VDAccountSettingsScreen;
