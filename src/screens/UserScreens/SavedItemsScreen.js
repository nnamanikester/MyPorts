import React from 'react';
import {StyleSheet, View, ToastAndroid, Dimensions} from 'react-native';
import * as UI from '../../components/common';
import Avater from '../../components/Avatar';
import EmptyItem from '../../components/EmptyItem';
import {primaryColor} from '../../components/common/variables';
import {connect} from 'react-redux';
import {CUSTOMER_SAVES} from '../../apollo/queries';
import {CREATE_SAVE, CLEAR_SAVED_ITEMS} from '../../apollo/mutations';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import ScreenHeaderWithCart from '../../components/ScreenHeaderWithCart';

const SavedItemsScreen = ({navigation, offline, customer}) => {
  const [items, setItems] = React.useState([]);

  const [getItems, {data, loading, error}] = useLazyQuery(CUSTOMER_SAVES, {
    pollInterval: 500,
  });
  const [deleteItem, {loading: deleteLoading}] = useMutation(CREATE_SAVE);
  const [deleteItems, {loading: clearLoading}] = useMutation(CLEAR_SAVED_ITEMS);

  React.useMemo(() => {
    if (!offline) {
      getItems({
        variables: {
          id: customer.id,
        },
      });
    }
    if (error) {
      ToastAndroid.show('Unable to get saved items!', ToastAndroid.SHORT);
    }
  }, [error]);

  React.useMemo(() => {
    if (data) {
      setItems(data.customerSaves);
    }
  }, [data]);

  const handeleteItem = (id) => {
    deleteItem({
      variables: {
        customerId: customer.id,
        productId: id,
      },
    })
      .then((res) => {
        ToastAndroid.show('Unsaved!', ToastAndroid.SHORT);
      })
      .catch((e) => {
        ToastAndroid.show(
          'Unable to delete item! Plealse try again!',
          ToastAndroid.SHORT,
        );
      });
  };

  const handleClearItems = () => {
    deleteItems({
      variables: {
        customerId: customer.id,
      },
    })
      .then((res) => {
        ToastAndroid.show('Saved items Cleared!', ToastAndroid.SHORT);
        setItems([]);
      })
      .catch((e) => {
        ToastAndroid.show('Unable to clear saved items!', ToastAndroid.SHORT);
      });
  };

  return (
    <>
      <UI.Loading show={loading || clearLoading || deleteLoading} />

      <ScreenHeaderWithCart
        navigation={navigation}
        title="Saved Items"
        icon="back"
      />

      <UI.Layout>
        {!loading && !items.length > 0 && (
          <View style={styles.emptyContainer}>
            <EmptyItem
              icon={<UI.Icon name="ios-bookmark" size={100} />}
              show
              title="No Saved Item Found!"
              message="All saved items will appear here"
            />
          </View>
        )}

        {!loading &&
          items.length > 0 &&
          items.map((p, i) => {
            return (
              <UI.ListItem
                key={p.id + i}
                onClick={() =>
                  navigation.navigate('SingleProduct', {product: p.product})
                }
                left={<Avater src={{uri: p.product.images[0].url}} large />}
                body={
                  <>
                    <UI.Text heading>{p.product.name}</UI.Text>
                    <UI.Spacer />
                    <UI.Text>
                      Stock: <UI.Text note>{p.product.quantity}</UI.Text>
                    </UI.Text>
                    <UI.Text note>{p.product.category.name}</UI.Text>
                  </>
                }
                right={
                  <View style={{alignItems: 'flex-end'}}>
                    <UI.Link onClick={() => handeleteItem(p.product.id)}>
                      <UI.Icon name="md-close" />
                    </UI.Link>
                  </View>
                }
              />
            );
          })}

        <UI.Spacer large />

        <View style={styles.container}>
          {items.length > 0 ? (
            <UI.Button
              onClick={() => handleClearItems()}
              iconLeft={<UI.Icon color="#fff" name="md-close" />}
              iconRight={<UI.Icon color={primaryColor} name="md-close" />}>
              <UI.Text color="#fff">Clear Items</UI.Text>
            </UI.Button>
          ) : null}

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
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: Dimensions.get('screen').height - 150,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(SavedItemsScreen);
