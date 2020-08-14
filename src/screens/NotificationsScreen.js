import React from 'react';
import {connect} from 'react-redux';
import * as UI from '../components/common';
import Header from '../components/Header';
import {NOTIFICATIONS} from '../apollo/queries';
import {UPDATE_NOTIFICATION} from '../apollo/mutations';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {setNotificationsStorage} from '../redux/actions/NotificationsAction';
import {ToastAndroid, StyleSheet, View} from 'react-native';
import {primaryColor, success} from '../components/common/variables';
import moment from 'moment';

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
      first: 60,
      where: {
        user: {
          id: user.id,
        },
      },
      orderBy: 'createdAt_DESC',
    },
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
        let notification = notifications.find(
          (n) => res.data.updateNotification.id === n.id,
        );
        notification.status = 2;
        setNotificationsStorage([...notifications, notification]);
      })
      .catch((e) => {
        ToastAndroid.show(
          'Please check your network connection and try again.',
          ToastAndroid.SHORT,
        );
        console.log(e);
      });
  };

  // Fetch more products onEndReach for pagination.
  const fetchMoreNotifications = () => {
    if (!data) {
      return;
    }
    setFetching(true);
    // Check if  there's a next page.
    if (data.notifications.pageInfo.hasNextPage) {
      // Fetch more products
      fetchMore({
        variables: {
          after: data.products.pageInfo.endCursor,
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
      <Header
        isCart
        title="Notifications"
        headerLeft={
          <UI.Clickable onClick={() => navigation.openDrawer()}>
            <UI.Icon name="ios-menu" color="#fff" />
          </UI.Clickable>
        }
        headerRight={
          <>
            <UI.Clickable onClick={() => navigation.navigate('Cart')}>
              <UI.Icon
                name="shopping-bag"
                size={22}
                type="Feather"
                color="#fff"
              />
            </UI.Clickable>
            <UI.Spacer medium />
            <UI.Clickable onClick={() => navigation.navigate('Search')}>
              <UI.Icon name="ios-search" color="#fff" />
            </UI.Clickable>
          </>
        }
      />

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
                ImageIcon = <UI.Icon color="#fff" name="md-card" />;
                break;
              case 'OFFER':
                ImageIcon = <UI.Icon color="#fff" name="ios-gift" />;
                break;
              default:
                ImageIcon = <UI.Icon color="#fff" name="ios-notifications" />;
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
                body={<UI.Text>{n.message}</UI.Text>}
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
    backgroundColor: primaryColor,
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
