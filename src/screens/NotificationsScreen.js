import React from 'react';
import {connect} from 'react-redux';
import * as UI from '../components/common';
import {NOTIFICATIONS} from '../apollo/queries';
import {UPDATE_NOTIFICATION} from '../apollo/mutations';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {setNotificationsStorage} from '../redux/actions/NotificationsAction';
import {ToastAndroid, StyleSheet, View} from 'react-native';
import {primaryColor, success, danger} from '../components/common/variables';
import moment from 'moment';
import ScreenHeaderWithCart from '../components/ScreenHeaderWithCart';

const NotificationsScreen = ({
  navigation,
  user,
  setNotificationsStorage,
  notifications,
}) => {
  const [fetching, setFetching] = React.useState(false);

  const [
    getNotifications,
    {loading, data, error, refetch, fetchMore},
  ] = useLazyQuery(NOTIFICATIONS, {
    variables: {
      first: 20,
      where: {
        user: {
          id: user.id,
        },
      },
      orderBy: 'createdAt_DESC',
    },
    // pollInterval: 500,
  });

  const [markAsRead, {loading: marLoading}] = useMutation(UPDATE_NOTIFICATION);

  React.useEffect(() => {
    getNotifications();
  }, []);

  React.useMemo(() => {
    if (data) {
      setNotificationsStorage(data.notifications.edges.map((n) => n.node));
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      ToastAndroid.show(
        'Unable to load notifications. Please check your network connection.',
        ToastAndroid.SHORT,
      );
    }
  }, [error]);

  const handleMarkAsRead = (id) => {
    markAsRead({
      variables: {
        where: {
          id,
        },
        data: {
          status: 2,
        },
      },
    })
      .then((res) => {
        setNotificationsStorage([
          ...notifications.map((n) => {
            if (res.data.updateNotification.id === n.id) {
              n.status = 2;
              return n;
            }
            return n;
          }),
        ]);
      })
      .catch((e) => {
        ToastAndroid.show(
          'Please check your network connection and try again.',
          ToastAndroid.SHORT,
        );
      });
  };

  // Fetch more notifications onEndReach for pagination.
  const fetchMoreNotifications = () => {
    if (!data) {
      return;
    }
    setFetching(true);
    // Check if  there's a next page.
    if (data.notifications.pageInfo.hasNextPage) {
      // Fetch more notifications
      fetchMore({
        variables: {
          after: data.notifications.pageInfo.endCursor,
        },
        // Update the cached data with the fetched product
        updateQuery: (prev, {fetchMoreResult}) => {
          if (prev.notifications.pageInfo.hasNextPage) {
            // if the previous page info has next page
            setFetching(false);
            // return the notifications with the new data added to cache
            return {
              notifications: {
                edges: [
                  ...prev.notifications.edges,
                  ...fetchMoreResult.notifications.edges,
                ],
                pageInfo: {...fetchMoreResult.notifications.pageInfo},
                __typename: fetchMoreResult.notifications.__typename,
              },
            };
          } else {
            // If not, return the precious cached data
            setFetching(false);
            return prev;
          }
        },
      });
    } else {
      setFetching(false);
    }
  };

  return (
    <>
      <ScreenHeaderWithCart navigation={navigation} title="Notifications" />

      <UI.Loading show={loading || marLoading} />
      <UI.Layout
        onEndReached={() => fetchMoreNotifications()}
        refreshing={fetching}
        onRefresh={() => refetch()}>
        <UI.Spacer medium />

        <UI.Text h3>All Notifications</UI.Text>

        <UI.Spacer />

        {notifications &&
          notifications.length > 0 &&
          notifications.map((n, i) => {
            let ImageIcon;

            switch (n.type) {
              case 'FUND':
                ImageIcon = (
                  <UI.Icon
                    type="MaterialIcons"
                    color={success}
                    name="call-received"
                  />
                );
                break;
              case 'CHARGE':
                ImageIcon = (
                  <UI.Icon
                    color={danger}
                    type="MaterialIcons"
                    name="call-made"
                  />
                );
                break;
              case 'ORDER':
                ImageIcon = (
                  <UI.Icon
                    color={primaryColor}
                    type="MaterialIcons"
                    name="local-shipping"
                  />
                );
                break;
              case 'OFFER':
                ImageIcon = <UI.Icon color={primaryColor} name="ios-gift" />;
                break;
              case 'SUPPORT':
                ImageIcon = (
                  <UI.Icon
                    color={primaryColor}
                    name="ios-help-circle-outline"
                  />
                );
                break;
              default:
                ImageIcon = (
                  <UI.Icon color={primaryColor} name="ios-notifications" />
                );
            }

            const d = new Date(n.createdAt).getDate();
            const today = new Date().getDate();
            let createdAt = moment(n.createdAt).fromNow();

            if (today - d !== 0) {
              createdAt = moment(n.createdAt).format('DD/MM/yyyy');
            }

            return (
              <UI.ListItem
                key={n.id + i}
                marked={n.status === 1}
                right={
                  <View style={styles.rightItem}>
                    <UI.Text size={10}>{createdAt}</UI.Text>
                    {n.status === 1 && (
                      <UI.Clickable
                        style={{alignItems: 'center'}}
                        onClick={() => handleMarkAsRead(n.id)}>
                        <UI.Icon
                          size={24}
                          color={success}
                          name="md-checkmark-circle"
                        />
                        <UI.Text size={10} color={primaryColor}>
                          Mark as read
                        </UI.Text>
                      </UI.Clickable>
                    )}
                  </View>
                }
                body={<UI.Text size={13}>{n.message}</UI.Text>}
                left={<View style={styles.imageIcon}>{ImageIcon}</View>}
              />
            );
          })}

        <UI.Spacer medium />

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <UI.Spinner show={fetching || loading || error} area={40} />
          {!fetching && !loading && !error && (
            <UI.Text>No more notifications!</UI.Text>
          )}
        </View>

        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    width: 50,
    height: 50,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  rightItem: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    notifications: state.notifications,
  };
};

export default connect(mapStateToProps, {setNotificationsStorage})(
  NotificationsScreen,
);
