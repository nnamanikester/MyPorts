import React from 'react';
import {View, StyleSheet, ToastAndroid, Alert} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {CREATE_REVIEW, UPDATE_REVIEW} from '../../apollo/mutations';
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
  const [openModal, setOpenModal] = React.useState(false);
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [reviews, setReviews] = React.useState([]);
  const [comment, setComment] = React.useState('');
  const [rating, setRating] = React.useState(null);
  const [reviewErrors, setReviewErrors] = React.useState(null);
  const [editingReview, setEditingReview] = React.useState(null);

  const [getReviews, {data, loading, error, refetch}] = useLazyQuery(REVIEWS, {
    variables: {
      id: params.s.id,
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
      Alert.alert(
        'Network Error!',
        'An error occured trying to load Reviews. Please check if you are connected to the internet and try again.',
        [{text: 'Try again', onPress: () => getReviews()}],
      );
    }
  }, [error]);

  const [createReview, {loading: rLoading}] = useMutation(CREATE_REVIEW);
  const [updateReview, {loading: urLoading}] = useMutation(UPDATE_REVIEW);

  const handleCreateReview = () => {
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
          vendorId: params.s.id,
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
          Alert.alert(
            'Error',
            'Unable to review at this time. Please try again!',
          );
        });
    }
    setRating(0);
    setComment('');
  };

  const handleEditReview = (r) => {
    setOpenEditModal(true);
    setEditingReview(r);
    setRating(r.rating);
    setComment(r.comment);
  };

  const handleUpdateReview = () => {
    setReviewErrors(null);
    if (!rating) {
      return setReviewErrors('Rating is required!');
    }
    if (!comment) {
      return setReviewErrors('Comment is required!');
    }
    if (!offline) {
      updateReview({
        variables: {
          comment,
          rating,
          id: editingReview.id,
        },
      })
        .then((res) => {
          setOpenEditModal(false);
          ToastAndroid.show('Review updated successfully!', ToastAndroid.SHORT);
          setRating(0);
          setComment('');
        })
        .catch((e) => {
          setOpenModal(false);
          Alert.alert(
            'Error',
            'Unable to update review at this time. Please try again!',
          );
        });
    }
  };

  return (
    <>
      <UI.Loading show={loading || rLoading || urLoading} />
      <Header
        title={params.s.profile.name}
        headerLeft={
          <UI.Link onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Link>
        }
      />
      <UI.Layout refreshing={loading} onRefresh={() => refetch()}>
        <UI.Spacer />
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
                  rating={r.rating}
                  date={moment(r.createdAt).format('DD/MM/YYYY')}
                  showEdit={r.customer.id === customer.id}
                  onEditClick={() => handleEditReview(r)}
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

          <UI.Button onClick={() => handleCreateReview()} size="small">
            <UI.Text color="#fff">Submit</UI.Text>
          </UI.Button>
        </UI.Row>
      </UI.Modal>

      <UI.Modal show={openEditModal}>
        <UI.Text heading>Edit Review</UI.Text>

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
              setOpenEditModal(false);
            }}
            size="small"
            type="ghost">
            Cancel
          </UI.Button>

          <UI.Spacer />

          <UI.Button onClick={() => handleUpdateReview()} size="small">
            <UI.Text color="#fff">Update</UI.Text>
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
