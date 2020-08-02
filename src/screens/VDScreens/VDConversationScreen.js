import React from 'react';
import * as UI from '../../components/common';
import {View, StyleSheet, Alert, Dimensions, ToastAndroid} from 'react-native';
import Header from '../../components/Header';
import Message from '../../components/Message';
import ConversationEntry from '../../components/ConversationEntry';
import {warning, danger} from '../../components/common/variables';
import {useLazyQuery, useMutation, useQuery} from '@apollo/react-hooks';
import {
  CREATE_CHAT,
  UPDATE_CHAT,
  DELETE_CHAT,
  SEND_MESSAGE,
} from '../../apollo/mutations';
import {GET_ACTIVE_CHAT, GET_MESSAGES} from '../../apollo/queries';
import {connect} from 'react-redux';

const VDConversationScreen = ({navigation, route: {params}, user}) => {
  const {customer, vendor} = params;

  const [selected, setSelected] = React.useState(false);

  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [chat, setChat] = React.useState({});
  const [activeChat, setActiveChat] = React.useState(false);

  const {
    data: activeChatData,
    loading: activeChatLoading,
    error: activeChatError,
  } = useQuery(GET_ACTIVE_CHAT, {
    variables: {
      vendorId: vendor.id,
      customerId: customer.id,
    },
  });

  const [createChat, {loading: createChatLoading}] = useMutation(CREATE_CHAT, {
    variables: {
      vendorId: vendor.id,
      customerId: customer.id,
    },
  });

  const [
    getMessages,
    {data: messageData, loading: messageLoading},
  ] = useLazyQuery(GET_MESSAGES, {
    pollInterval: 500,
  });

  const [sendMessage, {loading: sendMessageLoading}] = useMutation(
    SEND_MESSAGE,
  );

  React.useMemo(() => {
    if (activeChatData && activeChatData.getActiveChat.length > 0) {
      setChat(activeChatData.getActiveChat[0]);
      setActiveChat(true);
    } else {
      setActiveChat(false);
    }
  }, [activeChatData]);

  React.useMemo(() => {
    getMessages({
        variables: {
          id: chat.id,
        },
      });
    if (messageData) {
      setMessages(messageData.messages);
    }
  }, [messageData]);

  React.useMemo(() => {
    if (activeChatError) {
      Alert.alert(
        'Network Error!',
        'Please check if you are connected to the internet and try again.',
        [{text: 'Try again', onPress: () => navigation.goBack()}],
      );
    }
  }, [activeChatError]);

  const onSelectMessage = () => {
    return setSelected(true);
  };

  const handleSendMessage = () => {
    // Send Message
    sendMessage({
      variables: {
        sender: user.id,
        chatId: chat.id,
        message,
      },
    })
      .then((res) => {
        setMessages([...messages, res.data.sendMessage]);
        setMessage('');
      })
      .catch(() => {
        ToastAndroid.show('Error Sending Message!', ToastAndroid.SHORT);
      });
  };

  return (
    <>
      <UI.Loading
        show={activeChatLoading || createChatLoading || messageLoading}
      />
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
            {activeChat && (
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
            )}
          </View>
        }
      />
      {activeChat && (
        <View style={styles.info}>
          <UI.Text note>
            This chat will automatically be closed in{' '}
            <UI.Text note color={danger}>
              24hrs
            </UI.Text>
          </UI.Text>
        </View>
      )}
      <UI.Layout>
        {activeChat && (
          <View style={styles.container}>
            {messages && messages.length > 0
              ? messages.map((m, i) => {
                  return (
                    <Message
                      key={m.id + i}
                      onClick={() => {
                        if (selected) {
                          setSelected(false);
                        }
                      }}
                      onSelect={onSelectMessage}
                      selected={selected}
                      message={m.message}
                      time={m.createdAt}
                      right={m.sender.id === user.id}
                    />
                  );
                })
              : null}
          </View>
        )}

        {!activeChat && !activeChatLoading && (
          <View style={styles.startChatContainer}>
            <UI.Text bold style={{textAlign: 'center'}}>
              Have a complaint or want to talk to {vendor.profile.name} about a
              product?
            </UI.Text>
            <UI.Spacer medium />
            <UI.Button
              onClick={() =>
                createChat()
                  .then((res) => {
                    setChat(res.data.createChat);
                    setActiveChat(true);
                  })
                  .catch(() => {
                    Alert.alert(
                      'Error!',
                      'Error startin chat session. Please try again',
                    );
                  })
              }>
              <UI.Text color="#fff">Start a Chat Session</UI.Text>
            </UI.Button>
          </View>
        )}
      </UI.Layout>
      {activeChat && (
        <ConversationEntry
          value={message}
          onChangeText={(value) => setMessage(value)}
          sending={sendMessageLoading}
          onSubmit={() => handleSendMessage()}
        />
      )}
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
  startChatContainer: {
    padding: 80,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 200,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(VDConversationScreen);
