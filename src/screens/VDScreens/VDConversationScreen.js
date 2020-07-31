import React, {useState} from 'react';
import * as UI from '../../components/common';
import {View, StyleSheet, Alert} from 'react-native';
import Header from '../../components/Header';
import Message from '../../components/Message';
import ConversationEntry from '../../components/ConversationEntry';
import {warning, danger} from '../../components/common/variables';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';

const VDConversationScreen = ({navigation, route: {params}}) => {
  const {customer, vendor} = params;

  const [selected, setSelected] = useState(false);
  const [message, setMessage] = useState('');

  const onSelectMessage = () => {
    return setSelected(true);
  };

  const handleSendMessage = () => {
    // Send Message
  };

  return (
    <>
      <Header
        title={vendor.profile.name}
        headerLeft={
          <UI.Clickable
            style={{flexDirection: 'row', alignItems: 'center'}}
            onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer />
            <UI.Avatar src={{uri: vendor.profile.logo}} rounded />
          </UI.Clickable>
        }
        headerRight={
          <View>
            <UI.Option
              icon={<UI.Icon color="#fff" name="ios-more" />}
              options={[
                {
                  label: 'End Chat',
                  action: () => Alert.alert('Message', 'Chat ended'),
                },
                {
                  label: 'Copy',
                  action: () => {},
                },
                {
                  label: 'Delete',
                  action: () => {},
                },
                {
                  label: 'Clear Conversation',
                  action: () => {},
                },
              ]}
            />
          </View>
        }
      />
      <View style={styles.info}>
        <UI.Text note>
          This chat will automatically be closed in{' '}
          <UI.Text note color={danger}>
            24hrs
          </UI.Text>
        </UI.Text>
      </View>
      <UI.Layout>
        <View style={styles.container}>
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="Hello"
            time="12:45pm"
            sent
            right
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="What's up?"
            time="12:46pm"
            sent
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="I'm fine. I wanted to ask if you can do me a favor."
            time="12:47pm"
            sent
            right
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="Ok dear. Say it, I'm all ears."
            time="12:48pm"
            sent
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            selected={selected}
            message="Alright thanks. Please, I need 2k urgently... Please!!! it's really holding me on my neck right now."
            time="12:49pm"
            onSelect={onSelectMessage}
            sent
            right
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="Ok bye!"
            time="12:50pm"
            sent
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="Hello!"
            time="12:51pm"
            right
          />
          <Message
            onClick={() => {
              if (selected) {
                setSelected(false);
              }
            }}
            onSelect={onSelectMessage}
            selected={selected}
            message="Are you there?"
            time="12:52pm"
            right
          />
        </View>
      </UI.Layout>
      <ConversationEntry
        value={message}
        onChangeText={(value) => setMessage(value)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  info: {
    backgroundColor: warning,
    paddingHorizontal: 20,
    paddingVertical: 2,
    alignItems: 'center',
  },
});

export default VDConversationScreen;
