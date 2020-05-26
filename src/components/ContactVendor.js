import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  Text,
  Badge,
  Spacer,
  Icon,
  TextInput,
  Column,
  FloatButton,
  Option,
} from './common';
import {grayColor, primaryColor, success} from './common/variables';

const ContactVendor = ({
  isOpen,
  chatImage,
  onChatOpen,
  onChatClose,
  onEndChat,
  onChageText,
  onSendMessage,
}) => {
  return (
    <View
      style={{
        ...styles.contact,
        width: isOpen ? '100%' : 80,
        height: isOpen ? '100%' : 80,
      }}>
      {isOpen && (
        <View style={styles.chatArena}>
          <View style={styles.chatHeader}>
            <Image style={styles.chatPic} source={chatImage} />
            <Spacer medium />
            <View style={{flex: 1}}>
              <Text style={styles.chatTitle}>Shop and Smile</Text>
              <Text note color="#fff">
                I was part of something special...
              </Text>
            </View>
            {/* <Option /> */}
            <TouchableOpacity onPress={onChatClose} activeOpacity={0.7}>
              <Icon name="md-close" size={36} color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={styles.chatBody}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.receiverText}>
                Hello, What's up with you and your worts, I hope you're doin
                good. Anyway's I wanted to ask how much you're selling my
                favorite jwery. I meant the gold coloured one
              </Text>
              <Text style={styles.senderText}>
                Ok, the last time I sold it to you was, 29k. Let's just stick to
                the price
              </Text>
              <Text style={styles.receiverText}>
                Ok, I just have 20k this time around
              </Text>
              <Text style={styles.senderText}>
                Why not save up to 25k. That would be nicer
              </Text>
              <Text style={styles.receiverText}>Please take it</Text>
              <Text style={styles.senderText}>
                Ok. are you gonna pay me later?
              </Text>
              <Text style={styles.receiverText}>
                Oga, If say I get am, I go pay na. Abeg
              </Text>
              <Text style={styles.senderText}>
                It's alrght, make the orders first.
              </Text>
              <Text style={styles.receiverText}>
                Thanks boss! God bless... Reviewing your product na sure game
                na!
              </Text>
              <Text style={styles.senderText}>You're welcome man!</Text>
            </ScrollView>
          </View>
          <View style={styles.chatFooter}>
            <Column size="9">
              <TextInput
                style={styles.messageBox}
                placeholder="Type a message..."
                onFocus
                multiline
              />
            </Column>
            <Spacer />
            <Column size="1">
              <FloatButton size="medium">
                <Icon name="ios-send" color="#fff" />
              </FloatButton>
            </Column>
          </View>
        </View>
      )}
      <View style={styles.contactButton}>
        {!isOpen && (
          <>
            <Badge color={success} />
            <FloatButton onClick={onChatOpen} size="medium" type="outline">
              <Icon name="ios-chatbubbles" color={primaryColor} />
            </FloatButton>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9,
    elevation: 222222,
    bottom: 0,
    right: 0,
  },
  contactButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    elevation: 99999999,
  },
  chatArena: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    elevation: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  chatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 90,
    backgroundColor: primaryColor,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    elevation: 5,
  },
  chatPic: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: grayColor,
    borderRadius: 100,
  },
  chatTitle: {
    fontFamily: 'SFPD-regular',
    fontSize: 20,
    color: '#fff',
  },
  chatBody: {
    padding: 10,
    paddingBottom: 150,
  },
  chatFooter: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    paddingRight: 10,
    backgroundColor: '#fff',
  },
  senderText: {
    color: '#fff',
    backgroundColor: primaryColor,
    width: '90%',
    maxWidth: '100%',
    padding: 10,
    fontFamily: 'SFPD-regular',
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  receiverText: {
    borderWidth: 1,
    borderColor: primaryColor,
    maxWidth: '90%',
    padding: 10,
    fontFamily: 'SFPD-regular',
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});

ContactVendor.propTypes = {};

ContactVendor.defaultProps = {
  onEndChat: () => {},
  onOpen: () => {},
};

export default ContactVendor;
