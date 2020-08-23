import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';

const FAQScreen = ({navigation}) => {
  return (
    <>
      <Header
        title="FAQ"
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Clickable>
        }
      />
      <UI.Layout>
        <UI.Spacer />

        <UI.Text h3>Frequently Asked Questions</UI.Text>

        <UI.Spacer large />

        <UI.Accordion>
          <UI.AccordionItem headerText="What is MyPorts?">
            <UI.Text>Answer goes here</UI.Text>
          </UI.AccordionItem>
          <UI.AccordionItem headerText="What is MyPorts?">
            <UI.Text>Answer goes here</UI.Text>
          </UI.AccordionItem>
          <UI.AccordionItem headerText="What is MyPorts?">
            <UI.Text>Answer goes here</UI.Text>
          </UI.AccordionItem>
        </UI.Accordion>

        <UI.Spacer large />

        <UI.Link onClick={() => navigation.navigate('ContactSupport')}>
          Have a question? Feel free to ask
        </UI.Link>
        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

export default FAQScreen;
