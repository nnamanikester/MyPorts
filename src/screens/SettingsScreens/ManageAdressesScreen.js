import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import {primaryColor, info} from '../../components/common/variables';
import {useLazyQuery} from '@apollo/react-hooks';
import {GET_ADDRESSES} from '../../apollo/queries';
import {connect} from 'react-redux';

const ManageAddressesScreen = ({navigation, offline, customer}) => {
  const [addresses, setAddresses] = React.useState([]);

  const [getAddresses, {loading, data, error, refetch}] = useLazyQuery(
    GET_ADDRESSES,
    {
      variables: {
        customerId: customer.id,
      },
      pollInterval: 500,
    },
  );

  React.useEffect(() => {
    getAddresses();
  }, [getAddresses]);

  React.useEffect(() => {
    if (data) {
      setAddresses(data.addresses);
    }

    if (error) {
      ToastAndroid.show('Error getting addresses', ToastAndroid.SHORT);
    }
  }, [data, error]);

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Manage Addresses"
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer horizontal medium />
          </UI.Clickable>
        }
        headerRight={
          <UI.Clickable onClick={() => navigation.navigate('AddAddress')}>
            <UI.Icon name="md-add" color="#fff" />
          </UI.Clickable>
        }
      />

      <UI.Layout onRefresh={() => refetch()}>
        <View style={styles.container}>
          {addresses.length > 0 &&
            addresses.map((a, i) => {
              return (
                <UI.ListItem
                  key={i + a.id}
                  onClick={() => navigation.navigate('EditAddress', {a})}
                  left={<UI.Icon name="ios-pin" color={info} />}
                  body={
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <UI.Text heading>{a.name}</UI.Text>
                        {a.default
                          ? a.default.address.id === a.id && (
                              <UI.Link>
                                <UI.Icon
                                  name="ios-flag"
                                  color={primaryColor}
                                  size={16}
                                />
                                {'  '}
                                Default
                              </UI.Link>
                            )
                          : null}
                      </View>
                      <UI.Text>
                        {a.address}, {a.city}
                      </UI.Text>
                      <UI.Text>{a.state}</UI.Text>
                      <UI.Text>{a.postalCode}</UI.Text>
                    </>
                  }
                />
              );
            })}
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(ManageAddressesScreen);
