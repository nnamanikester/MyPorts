import React from 'react';
import {StyleSheet, View, Alert, ToastAndroid} from 'react-native';
import * as UI from '../components/common';
import Header from '../components/Header';
import {SUPPORT_TICKET} from '../apollo/mutations';
import {useMutation} from '@apollo/react-hooks';
import {danger} from '../components/common/variables';
import {connect} from 'react-redux';
import Clipboard from '@react-native-community/clipboard';

const ContactSupportScreen = ({navigation, user}) => {
  const [title, setTitle] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [errors, setErrors] = React.useState({
    title: '',
    message: '',
  });

  const [createSupport, {loading}] = useMutation(SUPPORT_TICKET, {
    variables: {
      data: {
        title,
        message,
        ticketNo: '1',
        user: {
          connect: {
            id: user ? user.id : null,
          },
        },
      },
    },
  });

  const handleCreateSupport = () => {
    setErrors({
      title: '',
      message: '',
    });

    if (!title || title.length < 5) {
      return setErrors({
        ...errors,
        title: 'Title cannot be empty or is too short.',
      });
    }

    if (!message || message.length < 5) {
      return setErrors({
        ...errors,
        message: 'Message cannot be empty or is too short.',
      });
    }

    createSupport()
      .then((res) => {
        setTitle('');
        setMessage('');
        Alert.alert(
          'Message',
          `We have received your message an will be in touch shortly. Your Ticket No is ${res.data.supportTicket.ticketNo}`,
          [
            {
              text: 'Copy to  clipboard',
              onPress: () => {
                Clipboard.setString(res.data.supportTicket.ticketNo);
                ToastAndroid.show('Copied to clipbaord', ToastAndroid.SHORT);
              },
            },
            {text: 'Cancle'},
          ],
        );
      })
      .catch(() => {
        Alert.alert('Error!', 'Unable to create a ticket. Please try again.');
      });
  };

  return (
    <>
      <UI.Loading show={loading} />
      <Header
        title="Contact Support"
        headerLeft={
          <UI.Clickable
            onClick={() => navigation.goBack()}
            style={{flexDirection: 'row'}}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
            <UI.Spacer medium />
          </UI.Clickable>
        }
      />
      <UI.Layout style={{paddingHorizontal: 20}}>
        <UI.Spacer />
        <UI.Text h3>Contact Support</UI.Text>
        <UI.Spacer />
        <UI.Text note color="">
          Fill the form below to create a support ticket. We will be glad to
          help you solve your problem
        </UI.Text>
        <UI.Spacer large />

        <View>
          <UI.Text>Subject</UI.Text>
          <UI.Text note color="">
            How may we help you?
          </UI.Text>
          <UI.Spacer />
          {errors.title ? (
            <UI.Text color={danger}>{errors.title}</UI.Text>
          ) : null}
          <UI.TextInput
            value={title}
            onChangeText={(value) => setTitle(value)}
            placeholder="Enter Subject"
          />
          <UI.Spacer medium />
        </View>

        <View>
          <UI.Text>Message</UI.Text>
          <UI.Text note color="">
            Please make sure your express yourself well, so we can know how best
            to help you.
          </UI.Text>
          <UI.Spacer />
          {errors.message ? (
            <UI.Text color={danger}>{errors.message}</UI.Text>
          ) : null}
          <UI.TextInput
            rows={8}
            multiline
            value={message}
            onChangeText={(value) => setMessage(value)}
            placeholder="Enter Message"
            style={styles.messageBox}
          />
          <UI.Spacer medium />
        </View>

        <UI.Spacer />

        <UI.Button onClick={handleCreateSupport}>
          <UI.Text color="#fff">Submit</UI.Text>
        </UI.Button>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  messageBox: {
    height: 150,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(ContactSupportScreen);
