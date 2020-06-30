import React from 'react';
import * as UI from '../../../components/common';
import { View } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_PRODUCTS } from '../../../apollo/queries';
import { connect } from 'react-redux';
import Skeleton from 'react-native-skeleton-placeholder';
import EmptyItem from '../../../components/EmptyItem';
import { formatMoney } from '../../../utils';

const VDProductsScreen = ({ navigation, offline, vendor }) => {
  const [products, setProducts] = React.useState([]);

  const [searchText, setSearchText] = React.useState('');
  const [showFilter, setShowFilter] = React.useState(false);
  const [filter, setFilter] = React.useState({
    label: 'createdAt',
    value: 'createdAt_ASC',
  });

  const [getProducts, { loading, data, error }] = useLazyQuery(GET_PRODUCTS);

  React.useEffect(() => {
    if (!offline) {
      getProducts({
        variables: {
          where: {
            id: vendor.id,
          },
          first: 20,
        },
      });
    } else {
      alert("Please check if you're connected to the internet!");
    }

    if (data) {
      setProducts(data.products.edges.map((p) => p.node));
    }

    if (error) {
      alert('Unable to fetch your products!');
    }
  }, [data]);

  const handleSearch = (value) => {
    setSearchText(value);
  };

  return (
    <>
      <UI.Layout>
        <UI.Spacer />

        <SearchBar
          placeholder="Search product"
          onChangeText={(value) => handleSearch(value)}
          value={searchText}
          onFilterClick={() => setShowFilter(true)}
        />

        <UI.Spacer />

        {!loading && !error && !products.length > 0 && (
          <>
            <UI.Spacer large />
            <EmptyItem
              show
              title="No product found!"
              message="Click the + button to add a new product."
            />
          </>
        )}

        {(loading || error) && (
          <>
            <UI.ListItem
              left={
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              }
              body={
                <Skeleton>
                  <View
                    style={{ width: '70%', height: 10, marginBottom: 10 }}
                  />
                  <View style={{ width: '40%', height: 10 }} />
                </Skeleton>
              }
            />
            <UI.ListItem
              left={
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              }
              body={
                <Skeleton>
                  <View
                    style={{ width: '70%', height: 10, marginBottom: 10 }}
                  />
                  <View style={{ width: '40%', height: 10 }} />
                </Skeleton>
              }
            />
            <UI.ListItem
              left={
                <Skeleton>
                  <Skeleton.Item width={50} height={50} borderRadius={5} />
                </Skeleton>
              }
              body={
                <Skeleton>
                  <View
                    style={{ width: '70%', height: 10, marginBottom: 10 }}
                  />
                  <View style={{ width: '40%', height: 10 }} />
                </Skeleton>
              }
            />
          </>
        )}

        {!loading && products.length > 0 && (
          <>
            {products.map((prod) => (
              <UI.ListItem
                key={prod.id}
                onClick={() => navigation.navigate('VDEditProduct')}
                left={<UI.Avatar medium src={{ uri: prod.images[0].url }} />}
                body={
                  <>
                    <UI.Text heading>{prod.name}</UI.Text>
                    <UI.Text note color="">
                      20/03/2020
                    </UI.Text>
                  </>
                }
                right={
                  <View style={{ alignItems: 'flex-end' }}>
                    <UI.Text>NGN {formatMoney(prod.price)}</UI.Text>
                    <UI.Text>
                      {prod.status === 1 ? 'Published' : 'Draft'}
                    </UI.Text>
                  </View>
                }
              />
            ))}
          </>
        )}
      </UI.Layout>

      <UI.FAB onClick={() => navigation.navigate('VDAddProduct')} size={60}>
        <UI.Icon color="#fff" name="md-add" />
      </UI.FAB>

      <UI.ActionBar
        headerText="Sort Products"
        show={showFilter}
        onCloseButtonClick={() => setShowFilter(false)}>
        <UI.Text heading>Sort by</UI.Text>

        <UI.Spacer />

        <UI.Row>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.label}
              onChange={(value) => setFilter({ ...filter, label: value })}
              data={[
                { label: 'Name', value: 'name' },
                { label: 'Date', value: 'createdAt' },
                { label: 'Price', value: 'price' },
                { label: 'Sales', value: 'sales' },
              ]}
            />
          </UI.Column>
          <UI.Column size="6">
            <UI.Select
              type="dropdown"
              selected={filter.value}
              onChange={(value) => setFilter({ ...filter, value })}
              data={[
                { label: 'ASC', value: `${filter.label}_ASC` },
                { label: 'DESC', value: `${filter.label}_DESC` },
              ]}
            />
          </UI.Column>
        </UI.Row>

        <UI.Spacer large />

        <UI.Button>
          <UI.Text color="#fff">Apply Filter</UI.Text>
        </UI.Button>

        <UI.Spacer />

        <UI.Button type="ghost">Clear</UI.Button>
      </UI.ActionBar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    vendor: state.vendor,
  };
};

export default connect(mapStateToProps)(VDProductsScreen);
