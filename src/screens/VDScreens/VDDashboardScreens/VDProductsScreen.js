import React from 'react';
import {
  Text,
  Layout,
  ListItem,
  Icon,
  Spacer,
  Avatar,
  FAB,
} from '../../../components/common';
import { food3, image9, shoe3 } from '../../../assets/images';

const VDProductsScreen = () => {
  return (
    <>
      <Layout>
        <ListItem
          left={<Avatar medium src={food3} />}
          body={
            <>
              <Text heading>Leather Bag</Text>
              <Text>20/03/2020</Text>
            </>
          }
          right={
            <>
              <Text>NGN 2,000</Text>
              <Text>Sales: 16</Text>
            </>
          }
        />
        <ListItem
          left={<Avatar medium src={shoe3} />}
          body={
            <>
              <Text heading>Leather Bag</Text>
              <Text>20/03/2020</Text>
            </>
          }
          right={
            <>
              <Text>NGN 2,000</Text>
              <Text>Sales: 16</Text>
            </>
          }
        />
        <ListItem
          left={<Avatar medium src={image9} />}
          body={
            <>
              <Text heading>Leather Bag</Text>
              <Text>20/03/2020</Text>
            </>
          }
          right={
            <>
              <Text>NGN 2,000</Text>
              <Text>Sales: 16</Text>
            </>
          }
        />
      </Layout>
      <FAB onClick={() => {}} size={60}>
        <Icon color="#fff" name="md-add" />
      </FAB>
    </>
  );
};

export default VDProductsScreen;
