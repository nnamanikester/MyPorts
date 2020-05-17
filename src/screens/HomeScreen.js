import React from 'react';
import {Text, Layout, Row, Column, Spacer} from '../components/common';

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
    </Layout>
  );
};

export default HomeScreen;
