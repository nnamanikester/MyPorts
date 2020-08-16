import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as UI from '../../../components/common';
import Comment from '../../../components/Comment';
import EmptyItem from '../../../components/EmptyItem';
import {connect} from 'react-redux';
import {useLazyQuery} from '@apollo/react-hooks';
import {CUSTOMER_COMMENTS} from '../../../apollo/queries';
import moment from 'moment';

const UserComments = ({navigation, offline, customer}) => {
  const [comments, setComments] = React.useState([]);
  const [getComments, {data, error, loading}] = useLazyQuery(CUSTOMER_COMMENTS);

  React.useMemo(() => {
    if (!offline) {
      getComments({
        variables: {
          id: customer.id,
        },
      });
    }
  }, [error]);

  React.useMemo(() => {
    if (data) {
      setComments(data.customerComments);
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
            show={!loading && !comments.length > 0}
            title="No Comment Found!"
            message="All your comments to products will appear here"
          />

          {!loading &&
            comments.length > 0 &&
            comments.map((c, i) => {
              return (
                <Comment
                  key={c.id + i}
                  name={`You - ${c.product.name}`}
                  comment={c.comment}
                  image={{uri: c.product.images[0].url}}
                  date={moment(c.createdAt).format('DD/MM/YYYY')}
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

export default connect(mapStateToProps)(UserComments);
