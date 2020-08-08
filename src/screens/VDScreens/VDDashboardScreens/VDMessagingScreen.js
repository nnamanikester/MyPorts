import React from 'react';
import * as UI from '../../../components/common';
import {food3, image9, shoe3} from '../../../assets/images';
import {StyleSheet, View} from 'react-native';
import {
  success,
  danger,
  primaryColor,
} from '../../../components/common/variables';
import {useLazyQuery, useQuery} from '@apollo/react-hooks';
import {GET_VENDOR_CHATS} from '../../../apollo/queries';
import {connect} from 'react-redux';

const VDMessagingScreen = ({navigation, vendor}) => {
  const [chats, setChats] = React.useState([]);

  const {data, loading, error} = useQuery(GET_VENDOR_CHATS, {
    variables: {
      id: vendor.id,
    },
    pollInterval: 500,
  });

  React.useMemo(() => {
    if (data) {
      setChats(data.getVendorChats);
    }
  }, [data]);

  return (
    <>
      <UI.Loading show={loading} />
      <UI.Layout>
        <UI.Spacer />

        {chats && chats.length > 0
          ? chats.map((c, i) => {
              if (c.messages.length > 0) {
                return (
                  <UI.ListItem
                    key={c.id + i}
                    marked={c.status === 1}
                    onClick={() =>
                      navigation.navigate('VDConversation', {
                        customer: c.customer,
                        vendor,
                      })
                    }
                    left={
                      <UI.Avatar medium rounded src={{uri: c.customer.photo}} />
                    }
                    body={
                      <>
                        <UI.Text
                          heading>{`${c.customer.firstName} ${c.customer.lastName}`}</UI.Text>
                        <UI.Text numberOfLines={1} note>
                          {c.messages.length > 0
                            ? c.messages[c.messages.length - 1].message
                            : ''}
                        </UI.Text>
                      </>
                    }
                    right={
                      <View style={{justifyContent: 'space-between'}}>
                        <UI.Text
                          color={c.status === 1 ? success : danger}
                          note
                          style={styles.status}>
                          {c.status === 1 ? 'Active' : 'Closed'}
                        </UI.Text>
                      </View>
                    }
                  />
                );
              }
            })
          : null}
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  status: {
    textAlign: 'center',
    lineHeight: 15,
    fontWeight: '700',
  },
});

const mapStateToProps = (state) => {
  return {
    vendor: state.vendor,
  };
};

export default connect(mapStateToProps)(VDMessagingScreen);
