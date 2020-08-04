import React from 'react';
import Swiper from 'react-native-swiper';
import {StyleSheet, View, Image} from 'react-native';
import * as UI from '../../../../components/common';
import {formatMoney} from '../../../../utils';

const StepFive = ({
  images,
  description,
  name,
  specifications,
  quantity,
  price,
  shipping,
  fixedDiscount,
  percentageDiscount,
  show,
  onFinish,
}) => {
  if (!show) return null;

  return (
    <>
      <UI.Text h3>Product Preview</UI.Text>
      <UI.Text color="" note>
        Preview and publish your product.
      </UI.Text>

      <UI.Spacer medium />

      <Swiper animated autoplayTimeout={5} height={250} loop autoplay>
        {images.map((image, index) => (
          <View key={`${image.url + index}`}>
            <Image style={styles.featured} source={{uri: image.url}} />
          </View>
        ))}
      </Swiper>

      <UI.Spacer />

      <UI.Text size={18}>{name}</UI.Text>

      <View>
        <UI.Accordion initialIndex={0}>
          <UI.AccordionItem headerText="Description">
            <UI.Text>{description}</UI.Text>
          </UI.AccordionItem>

          {specifications && (
            <UI.AccordionItem headerText="Item Specifications">
              {specifications.map((spec, index) => (
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
              right={<UI.Text>{quantity}</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Price for 1</UI.Text>}
              right={<UI.Text>{`${formatMoney(price)}.00`}</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Shipping Cost</UI.Text>}
              right={
                <UI.Text>
                  {shipping == 0 ? 'Free' : `${formatMoney(shipping)}.00`}
                </UI.Text>
              }
            />
            {fixedDiscount ? (
              <UI.ListItem
                left={<UI.Text heading>Discount</UI.Text>}
                right={<UI.Text>{`${formatMoney(fixedDiscount)}.00`}</UI.Text>}
              />
            ) : null}
            {percentageDiscount ? (
              <UI.ListItem
                left={<UI.Text heading>Discount</UI.Text>}
                right={<UI.Text>{`${percentageDiscount}%`}</UI.Text>}
              />
            ) : null}
          </UI.AccordionItem>
        </UI.Accordion>
      </View>

      <UI.Spacer medium />

      <UI.Button onClick={onFinish}>
        <UI.Text color="#fff">Update</UI.Text>
      </UI.Button>

      <UI.Spacer large />
    </>
  );
};

const styles = StyleSheet.create({
  featured: {
    width: '100%',
    height: 250,
  },
});

export default StepFive;
