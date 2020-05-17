import React from 'react';
import {
  Text,
  Layout,
  Row,
  Column,
  Spacer,
  Button,
  Icon,
} from '../components/common';

const HomeScreen = () => {
  return (
    <Layout>
      <Row>
        <Column size="3">
          <Spacer small>
            <Text>Screen</Text>
          </Spacer>
        </Column>
        <Column size="3">
          <Spacer medium horizontal>
            <Text>Home Screen</Text>
          </Spacer>
        </Column>
        <Column size="3">
          <Spacer large vertical>
            <Text>Home Screen</Text>
          </Spacer>
        </Column>
        <Column size="3">
          <Text>Home Screen</Text>
        </Column>
        <Column size="3">
          <Text>Home Screen</Text>
        </Column>
      </Row>
      <Button
        // iconLeft={<Icon type="Ionicons" name="ios-arrow-back" />}
        iconRight={
          <Icon type="Ionicons" name="ios-arrow-forward" color="#fff" />
        }
        size="small"
        type="">
        <Text style={{color: '#fff'}}>Lists</Text>
      </Button>
      <Icon type="Ionicons" name="ios-list" color="red" />
    </Layout>
  );
};

export default HomeScreen;
