import React from 'react';
import {View, StyleSheet, ToastAndroid, Alert} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import {female4} from '../../assets/images';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {CREATE_REVIEW} from '../../apollo/mutations';
import {REVIEWS} from '../../apollo/queries';
import {connect} from 'react-redux';
import moment from 'moment';
import EmptyItem from '../../components/EmptyItem';

const VendorShopReviewScreen = ({
  navigation,
  route: {params},
  offline,
  customer,
}) => {
  const {id} = params;
  const [openModal, setOpenModal] = React.useState(false);
  const [reviews, setReviews] = React.useState([]);
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState(null);
  const [reviewErrors, setReviewErrors] = React.useState(null);

  const [getReviews, {data, loading, error, refetch}] = useLazyQuery(REVIEWS, {
    variables: {
      id,
    },
    pollInterval: 500,
  });

  React.useMemo(() => {
    if (!offline) {
      getReviews();
    }

    if (data) {
      setReviews(data.reviews);
    }
  }, [data]);

  React.useMemo(() => {
    if (error) {
      ToastAndroid.show(
        'An error occured while loading reviews!',
        ToastAndroid.LONG,
      );
    }
  }, [error]);

  const [createReview, {loading: rLoading}] = useMutation(CREATE_REVIEW);

  const handleCreateReveiw = () => {
    setReviewErrors(null);
    if (!rating) {
      return setReviewErrors('Rating is required!');
    }
    if (!comment) {
      return setReviewErrors('Comment is required!');
    }
    if (!offline) {
      createReview({
        variables: {
          comment,
          rating,
          customerId: customer.id,
          vendorId: id,
        },
      })
        .then((res) => {
          setOpenModal(false);
          ToastAndroid.show(
            'Successfully sent a review! Thanks for the review.',
            ToastAndroid.SHORT,
          );
        })
        .catch((e) => {
          setOpenModal(false);
          Alert.alert('Unable to review at this time. Please try again!');
        });
    }
    setRating(0);
    setComment('');
  };

  return (
    <>
      <UI.Loading show={loading || rLoading} />
      <Header
        title="Shop and Smile"
        headerLeft={
          <UI.Link onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Link>
        }
      />
      <UI.Layout refreshing={loading} onRefresh={() => refetch()}>
        <UI.UI.Spacer />
        <UI.Text h2>Ratings & Reviews</UI.Text>
        <UI.Spacer />
        <View style={styles.container}>
          {reviews &&
            reviews.map((r, i) => {
              return (
                <Comment
                  key={r.id + i}
                  name={`${r.customer.firstName} ${r.customer.lastName}`}
                  comment={r.comment}
                  image={{uri: r.customer.photo}}
                  value={r.rating}
                  date={moment(r.createdAt).format('DD/MM/YYYY')}
                  showEdit={r.customer.id === customer.id}
                  onEditClick={() => {}}
                />
              );
            })}

          <EmptyItem
            show={!loading && !reviews.length > 0}
            message="All reviews for this vendor will appear here!"
            title="Be First To Review!"
            icon={<UI.Icon name="ios-star" size={60} />}
          />
        </View>
      </UI.Layout>
      <UI.FAB onClick={() => setOpenModal(true)} size={60}>
        <UI.Icon color="#fff" name="md-create" />
      </UI.FAB>

      <UI.Modal show={openModal}>
        <UI.Text heading>Write a Review</UI.Text>

        <UI.Spacer medium />

        <UI.Rating
          clickable
          value={rating}
          onClick={(value) => setRating(value)}
        />

        <UI.Spacer />

        {reviewErrors ? <UI.Text color="red">{reviewErrors}</UI.Text> : null}

        <UI.Spacer />

        <View style={{width: '100%'}}>
          <UI.TextInput
            value={comment}
            onChangeText={(value) => setComment(value)}
            placeholder="Comment..."
            autoFocus
            multiline
          />
        </View>

        <UI.Divider />

        <UI.Row style={{justifyContent: 'space-between'}}>
          <UI.Button
            onClick={() => {
              setRating(0);
              setComment('');
              setOpenModal(false);
            }}
            size="small"
            type="ghost">
            Cancel
          </UI.Button>

          <UI.Spacer />

          <UI.Button onClick={() => handleCreateReveiw()} size="small">
            <UI.Text color="#fff">Submit</UI.Text>
          </UI.Button>
        </UI.Row>
      </UI.Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(VendorShopReviewScreen);
