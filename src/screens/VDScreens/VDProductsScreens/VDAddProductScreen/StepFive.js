import React from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, Image } from 'react-native';
import * as UI from '../../../../components/common';
import { shoe1, shoe3, shoe2 } from '../../../../assets/images';

const StepFive = ({ show, onFinish }) => {
  if (!show) return null;

  return (
    <>
      <UI.Text h3>Product Preview</UI.Text>
      <UI.Text color="" note>
        Preview and publish your product.
      </UI.Text>

      <UI.Spacer medium />

      <Swiper animated autoplayTimeout={5} height={300} loop autoplay>
        <View>
          <Image style={styles.featured} source={shoe1} />
        </View>
        <View>
          <Image style={styles.featured} source={shoe2} />
        </View>
        <View>
          <Image style={styles.featured} source={shoe3} />
        </View>
      </Swiper>

      <UI.Spacer />

      <UI.Text size={18}>Product Name</UI.Text>

      <View>
        <UI.Accordion initialIndex={0}>
          <UI.AccordionItem headerText="Description">
            <UI.Text>
              Enjoy the beauty of italian cotton all over your body. This item
              will fit your body and warm you up all over and during spring.
              This item will fit your body and warm you up all over and during
              spring.
              {'\n\n'}
              And over and over again, this is the UI.text.
            </UI.Text>
          </UI.AccordionItem>
          <UI.AccordionItem headerText="Item Specifications">
            <UI.ListItem
              left={<UI.Text heading>Quantity</UI.Text>}
              right={<UI.Text>29</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Sizes</UI.Text>}
              right={<UI.Text>S/M/L/XL/XXL</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Price for 1</UI.Text>}
              right={<UI.Text>N 2,500</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Shipping Cost</UI.Text>}
              right={<UI.Text>Free</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Discount</UI.Text>}
              right={<UI.Text>10% / 20 Pieces</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Location</UI.Text>}
              right={<UI.Text>Victoria Island, Lagos.</UI.Text>}
            />
            <UI.ListItem
              left={<UI.Text heading>Delivery Period</UI.Text>}
              right={<UI.Text>3 Days Max.</UI.Text>}
            />
          </UI.AccordionItem>
        </UI.Accordion>
      </View>

      <UI.Spacer medium />

      <UI.Button>
        <UI.Text color="#fff">Publish</UI.Text>
      </UI.Button>

      <UI.Spacer />

      <UI.Button type="ghost">Save for later</UI.Button>

      <UI.Spacer large />
    </>
  );
};

const styles = StyleSheet.create({
  featured: {
    width: '100%',
    height: 300,
  },
});

export default StepFive;
