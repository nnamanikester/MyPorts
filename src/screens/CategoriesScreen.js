import React from 'react';
import {connect} from 'react-redux';
import * as UI from '../components/common';
import Header from '../components/Header';
import Category from '../components/Category';
import EmptyItem from '../components/EmptyItem';
import {StyleSheet, View, Dimensions, Alert} from 'react-native';
import {useLazyQuery} from '@apollo/react-hooks';
import {GET_CATEGORIES} from '../apollo/queries';
import Skeleton from 'react-native-skeleton-placeholder';

const CategoriesScreen = ({navigation, offline}) => {
  const [categories, setCategories] = React.useState([]);

  const [getCategories, {data, loading, error}] = useLazyQuery(GET_CATEGORIES);

  React.useEffect(() => {
    if (!offline) {
      getCategories();
    }
  }, []);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Network Error!',
        'An error occured trying to load categories. Please check if you are connected to the internet and try again.',
        [{text: 'Try again', onPress: () => getCategories()}],
      );
    }
  }, [error]);

  React.useMemo(() => {
    if (data) {
      setCategories(data.categories);
    }
  }, [data]);

  return (
    <>
      <Header
        isCart
        title="Categories"
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
          {loading && (
            <Skeleton>
              <Skeleton.Item
                borderRadius={5}
                width="100%"
                height={150}
                marginVertical={10}
              />
              <Skeleton.Item
                borderRadius={5}
                width="100%"
                height={150}
                marginVertical={10}
              />
              <Skeleton.Item
                borderRadius={5}
                width="100%"
                height={150}
                marginVertical={10}
              />
            </Skeleton>
          )}

          {!loading && !categories.length > 0 && (
            <View style={styles.emptyContainer}>
              <EmptyItem
                icon={<UI.Icon name="ios-list" size={100} />}
                show
                title="No Category Found!"
                message="All categories Will appear here."
              />
            </View>
          )}

          {categories &&
            categories.map((c, i) => {
              return (
                <Category
                  key={c.id + i}
                  onClick={() => navigation.navigate('ProductsByCategory', {c})}
                  title={c.name}
                  image={{uri: c.imageUrl}}
                  subtitle={`${c.products.length} Items`}
                />
              );
            })}

          <UI.Spacer size={50} />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('screen').height - 200,
    flex: 1,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
  };
};

export default connect(mapStateToProps)(CategoriesScreen);
