import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import EmptyItem from '../../components/EmptyItem';
import Skeleton from 'react-native-skeleton-placeholder';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {CREATE_COMMENT} from '../../apollo/mutations';
import {PRODUCT_COMMENTS} from '../../apollo/queries';
import {connect} from 'react-redux';
import moment from 'moment';
import {info} from '../../components/common/variables';

const ProductCommentsScreen = ({
  navigation,
  route: {params},
  offline,
  customer,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState('');

  const [
    getComments,
    {data: commentData, loading: commentsLoading, error, refetch},
  ] = useLazyQuery(PRODUCT_COMMENTS, {
    variables: {id: params.id},
    pollInterval: 500,
  });

  const [
    createComment,
    {
      data: createCommentData,
      loading: createCommentLoading,
      error: createCommentError,
    },
  ] = useMutation(CREATE_COMMENT);

  React.useEffect(() => {
    if (!offline) {
      getComments();
    }
  }, []);

  React.useMemo(() => {
    if (commentData) {
      setComments(commentData.productComments);
    }
  }, [commentData]);

  React.useMemo(() => {
    if (error) {
      Alert.alert(
        'Network Error!',
        'An error occured while loadding comments. Please check your internet connection and try again.',
        [{text: 'Try again', onPress: () => getComments()}],
      );
    }
  }, [error]);

  React.useMemo(() => {
    if (createCommentData) {
      setOpenModal(false);
      setCommentText('');
    }
  }, [createCommentData]);

  React.useMemo(() => {
    if (createCommentError) {
      Alert.alert('Error', 'Unable to comment at the time. Please try again!');
    }
  }, [createCommentError]);

  const handleCreateComment = () => {
    if (!commentText) {
      return;
    }
    createComment({
      variables: {
        comment: commentText,
        productId: params.id,
        customerId: customer.id,
      },
    });
  };

  return (
    <>
      <UI.Loading show={createCommentLoading} />
      <Header
        title={params.name}
        headerLeft={
          <UI.Link onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
          </UI.Link>
        }
      />
      <UI.Layout onRefresh={() => refetch()}>
        <View style={styles.container}>
          <UI.Spacer />
          <UI.Text h3>Comments</UI.Text>
          <UI.Spacer />

          {comments.length > 0 &&
            comments.map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  date={moment(comment.createdAt).format('DD/MM/YYYY')}
                  image={{uri: comment.customer.photo}}
                  name={`${comment.customer.firstName} ${comment.customer.lastName}`}
                  comment={comment.comment}
                />
              );
            })}
          {!comments.length > 0 && !commentsLoading && (
            <>
              <UI.Spacer large />
              <EmptyItem
                icon={<UI.Icon color={info} size={100} name="ios-chatboxes" />}
                show
                title="No Comments!"
                message="There are no comments yet! Be the first to write a comment."
              />
            </>
          )}
          {commentsLoading && (
            <UI.Row>
              <Skeleton>
                <Skeleton.Item
                  marginRight={20}
                  width={40}
                  height={40}
                  borderRadius={100}
                />
                <View style={{justifyContent: 'center'}}>
                  <View style={{width: 150, height: 10}} />
                </View>
                <View>
                  <View style={{width: 320, height: 10, marginTop: 10}} />
                  <View style={{width: 290, height: 10, marginTop: 5}} />
                  <View style={{width: 300, height: 10, marginTop: 5}} />
                </View>
              </Skeleton>
            </UI.Row>
          )}
        </View>
      </UI.Layout>
      <UI.FAB onClick={() => setOpenModal(true)} size={60}>
        <UI.Icon color="#fff" name="md-create" />
      </UI.FAB>

      <UI.Modal show={openModal}>
        <UI.Text heading>Write a Comment</UI.Text>
        <UI.Spacer medium />
        <View style={{width: '100%'}}>
          <UI.TextInput
            onChangeText={(value) => setCommentText(value)}
            value={commentText}
            placeholder="Write your comment..."
            autoFocus
            multiline
          />
        </View>
        <UI.Divider />
        <UI.Row style={{justifyContent: 'space-between'}}>
          <UI.Button
            onClick={() => setOpenModal(false)}
            size="small"
            type="ghost">
            Cancel
          </UI.Button>
          <UI.Spacer />
          <UI.Button onClick={() => handleCreateComment()} size="small">
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

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(ProductCommentsScreen);
