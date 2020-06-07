import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Text,
  Icon,
  ListItem,
  Spacer,
  Layout,
  Button,
  Clickable,
} from '../../components/common';
import Avater from '../../components/Avatar';
import { female4 } from '../../assets/images';
import { Link } from '../../components/common';
import Header from '../../components/Header';
import { primaryColor } from '../../components/common/variables';

const SavedItemsScreen = ({ navigation }) => {
  return (
    <>
      <Header
        isCart
        title="Saved Items"
        headerLeft={
          <Clickable onClick={() => navigation.openDrawer()}>
            <Icon name="ios-menu" color="#fff" />
          </Clickable>
        }
        headerRight={
          <>
            <Clickable onClick={() => navigation.navigate('Cart')}>
              <Icon name="shopping-bag" size={22} type="Feather" color="#fff" />
            </Clickable>
            <Spacer medium />
            <Clickable onClick={() => navigation.navigate('Search')}>
              <Icon name="ios-search" color="#fff" />
            </Clickable>
          </>
        }
      />
      <Layout>
        <ListItem
          onClick={() => navigation.navigate('SingleProduct')}
          left={<Avater src={female4} size={100} />}
          body={
            <>
              <Text heading>Bag and Show Item</Text>
              <Spacer />
              <Text>
                Quantity: <Text note>24</Text>
              </Text>
              <Text note>Shop and Smile</Text>
            </>
          }
          right={
            <View style={{ alignItems: 'flex-end' }}>
              <Link>
                <Icon name="md-close" />
              </Link>
            </View>
          }
        />
        <ListItem
          onClick={() => navigation.navigate('SingleProduct')}
          left={<Avater src={female4} size={100} />}
          body={
            <>
              <Text heading>Bag and Show Item</Text>
              <Spacer />
              <Text>
                Quantity: <Text note>24</Text>
              </Text>
              <Text note>Shop and Smile</Text>
            </>
          }
          right={
            <View style={{ alignItems: 'flex-end' }}>
              <Link>
                <Icon name="md-close" />
              </Link>
            </View>
          }
        />
        <ListItem
          onClick={() => navigation.navigate('SingleProduct')}
          left={<Avater src={female4} size={100} />}
          body={
            <>
              <Text heading>Bag and Show Item</Text>
              <Spacer />
              <Text>
                Quantity: <Text note>24</Text>
              </Text>
              <Text note>Shop and Smile</Text>
            </>
          }
          right={
            <View style={{ alignItems: 'flex-end' }}>
              <Link>
                <Icon name="md-close" />
              </Link>
            </View>
          }
        />
        <Spacer large />

        <View style={styles.container}>
          <Button
            // showIconDivider
            iconLeft={<Icon color="#fff" name="md-close" />}
            iconRight={<Icon color={primaryColor} name="md-close" />}>
            <Text color="#fff">Clear Items</Text>
          </Button>

          <Spacer large />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default SavedItemsScreen;
