import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as UI from '../../../components/common';
import Header from '../../../components/Header';
import Swiper from 'react-native-swiper';
import { formatMoney } from '../../../utils';

const VDSingleProductScreen = ({ navigation, route: { params } }) => {
  const { product } = params;

  return (
    <>
      <Header
        title={product.name}
        headerLeft={
          <>
            <UI.Clickable onClick={() => navigation.goBack()}>
              <UI.Icon color="#fff" name="ios-arrow-back" />
            </UI.Clickable>
          </>
        }
        headerRight={
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <UI.Clickable>
              <UI.Icon size={25} name="md-create" color="#fff" />
            </UI.Clickable>
            <UI.Spacer size={12} />
            <UI.Clickable>
              <UI.Icon size={25} name="md-trash" color="#fff" />
            </UI.Clickable>
            <UI.Spacer size={12} />
            <UI.Option
              options={[
                { label: 'Publish', action: () => {} },
                { label: 'Revert to draft', action: () => {} },
              ]}
              icon={<UI.Icon name="md-more" color="#fff" />}
            />
          </View>
        }
      />
      <UI.Layout>
        <>
          <UI.Spacer medium />

          <Swiper animated autoplayTimeout={5} height={250} loop autoplay>
            {product &&
              product.images.map((image, index) => (
                <View key={`${image.url + index}`}>
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 5 }}
                    source={{ uri: image.url }}
                  />
                </View>
              ))}
          </Swiper>
          <View style={styles.titleContainer}>
            <UI.Text style={styles.category} heading>
              {product.category.name}
            </UI.Text>
          </View>

          <UI.Spacer />

          <UI.Text size={18}>{product && product.name}</UI.Text>

          <View>
            <UI.Accordion initialIndex={0}>
              <UI.AccordionItem headerText="Description">
                <UI.Text>{product && product.description}</UI.Text>
              </UI.AccordionItem>

              {product && product.specifications && (
                <UI.AccordionItem headerText="Item Specifications">
                  {product.specifications.map((spec, index) => (
                    <UI.ListItem
                      key={`${spec.specification + index}`}
                      left={<UI.Text heading>{spec.specification}</UI.Text>}
                      body={<UI.Text>{spec.value}</UI.Text>}
                    />
                  ))}
                </UI.AccordionItem>
              )}

              <UI.AccordionItem headerText="Item Details">
                <UI.ListItem
                  left={<UI.Text heading>Quantity</UI.Text>}
                  right={<UI.Text>{product && product.quantity}</UI.Text>}
                />
                <UI.ListItem
                  left={<UI.Text heading>Price for 1</UI.Text>}
                  right={
                    <UI.Text>{`${formatMoney(
                      product && product.price,
                    )}`}</UI.Text>
                  }
                />
                <UI.ListItem
                  left={<UI.Text heading>Shipping Cost</UI.Text>}
                  right={
                    <UI.Text>
                      {product.shipping == 0
                        ? 'Free'
                        : `${formatMoney(product && product.shipping)}`}
                    </UI.Text>
                  }
                />
                {product.fixedDiscount ? (
                  <UI.ListItem
                    left={<UI.Text heading>Discount</UI.Text>}
                    right={
                      <UI.Text>{`${formatMoney(
                        product && product.fixedDiscount,
                      )}`}</UI.Text>
                    }
                  />
                ) : null}
                {product && product.percentageDiscount ? (
                  <UI.ListItem
                    left={<UI.Text heading>Discount</UI.Text>}
                    right={
                      <UI.Text>{`${product.percentageDiscount}%`}</UI.Text>
                    }
                  />
                ) : null}
              </UI.AccordionItem>
            </UI.Accordion>
          </View>
        </>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  category: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#0009',
    paddingHorizontal: 5,
    top: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  titleContainer: {
    position: 'absolute',
    height: 250,
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 70,
  },
});

export default VDSingleProductScreen;
