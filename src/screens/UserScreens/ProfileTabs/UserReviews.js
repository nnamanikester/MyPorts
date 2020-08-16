import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as UI from '../../../components/common';
import Comment from '../../../components/Comment';
import EmptyItem from '../../../components/EmptyItem';
import {connect} from 'react-redux';
import {useLazyQuery} from '@apollo/react-hooks';
import {CUSTOMER_REVIEWS} from '../../../apollo/queries';
import moment from 'moment';

const UserReviews = ({customer, offline, navigation}) => {
  const [reviews, setReviews] = React.useState([]);
  const [getReviews, {data, error, loading}] = useLazyQuery(CUSTOMER_REVIEWS);

  React.useMemo(() => {
    if (!offline) {
      getReviews({
        variables: {
          id: customer.id,
        },
      });
    }
    console.log(error);
  }, [error]);

  React.useMemo(() => {
    if (data) {
      setReviews(data.customerReviews);
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <UI.Loading show={loading} />

      <UI.Layout>
        <UI.Spacer />

        <View style={styles.container}>
          <EmptyItem
            icon={
              <UI.Icon name="comment-slash" size={50} type="FontAwesome5" />
            }
            show={!loading && !reviews.length > 0}
            title="No Review Found!"
            message="All your reviews to products will appear here"
          />

          {!loading &&
            reviews.length > 0 &&
            reviews.map((r, i) => {
              return (
                <Comment
                  key={r.id + i}
                  name={`You - ${r.vendor.profile.name}`}
                  comment={r.comment}
                  image={{uri: r.vendor.profile.logo}}
                  date={moment(r.createdAt).format('DD/MM/YYYY')}
                  rating={r.rating}
                />
              );
            })}
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(UserReviews);
