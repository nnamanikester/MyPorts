import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { StyleSheet, View, Image } from 'react-native';
import * as UI from '../../components/common';
import Header from '../../components/Header';
import Comment from '../../components/Comment';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { PRODUCT_COMMENTS, GET_SINGLE_PRODUCT } from '../../apollo/queries';
import { CREATE_COMMENT } from '../../apollo/mutations';
import { formatMoney } from '../../utils';
import EmptyItem from '../../components/EmptyItem';
import Skeleton from 'react-native-skeleton-placeholder';
import {
  grayColor,
  info,
  danger,
  primaryColor,
} from '../../components/common/variables';
import { connect } from 'react-redux';
import moment from 'moment';

const SingleProductScreen = ({
  navigation,
  route: { params },
  offline,
  customer,
}) => {
  const p = params.product;
  const [comments, setComments] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const [commentText, setCommentText] = React.useState('');

  const [
    getProduct,
    { data: productData, loading: productLoading, error: productError },
  ] = useLazyQuery(GET_SINGLE_PRODUCT, { variables: { id: p.id } });
  const [
    getComments,
    { data: commentData, loading: commentsLoading, error },
  ] = useLazyQuery(PRODUCT_COMMENTS, {
    variables: { id: p.id },
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

  const [likeCount, setLikeCount] = useState(123);
  const [showCommentBox, setShowCommentBox] = useState(false);

  React.useEffect(() => {
    if (!offline) {
      getProduct();
      getComments();
    }
    if (productData) {
      setProduct(productData.product);
    }
    if (productError) {
      alert(
        "Error Loading Product!. \nPlease check if you're connected to the internet",
      );
    }
    if (commentData) {
      setComments(commentData.productComments);
    }
    if (createCommentData) {
      setShowCommentBox(false);
      setCommentText('');
    }
    if (createCommentError) {
      alert('Unable to comment at the time. Please try again!');
    }
  }, [
    commentData,
    createCommentData,
    productData,
    productError,
    createCommentError,
    error,
  ]);

  const handleCreateComment = () => {
    if (!commentText) return;
    createComment({
      variables: {
        comment: commentText,
        productId: p.id,
        customerId: customer.id,
      },
    });
  };

  return (
    <>
      <UI.Loading show={productLoading} />
      <Header
        isCart
        title={p.name}
        headerLeft={
          <UI.Clickable onClick={() => navigation.goBack()}>
            <UI.Icon name="ios-arrow-back" color="#fff" />
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
      <UI.Layout style={styles.layout}>
        <Swiper animated autoplayTimeout={5} height={300} loop autoplay>
          {p &&
            p.images.map((img, i) => {
              return (
                <View key={img + i}>
                  <Image style={styles.featured} source={{ uri: img.url }} />
                </View>
              );
            })}
        </Swiper>
        <View style={styles.titleContainer}>
          <UI.Text style={styles.category} heading>
            {p.category.name}
          </UI.Text>
        </View>
        <View style={styles.container}>
          <View style={styles.activities}>
            <UI.ActivityButton
              // inActiveIcon={
              //   <UI.Icon
              //     type="FontAwesome"
              //     size={20}
              //     name="heart-o"
              //     color={info}
              //   />
              // }
              activeIcon={
                <UI.Icon
                  type="FontAwesome"
                  size={20}
                  name="heart"
                  color={danger}
                />
              }
              // count={product ? product.likes.length : 0}
              onClick={() => setLikeCount(likeCount + 1)}
            />
            <UI.Spacer medium />
            <UI.ActivityButton
              inActiveIcon={
                <UI.Icon
                  type="Feather"
                  size={22}
                  name="message-circle"
                  color={info}
                />
              }
              // count={comments ? comments.length : 0}
              onClick={() => setLikeCount(likeCount + 1)}
            />
            <UI.Spacer medium />
            <UI.ActivityButton
              // inActiveIcon={
              //   <UI.Icon
              //     type="FontAwesome"
              //     size={20}
              //     name="bookmark-o"
              //     color={info}
              //   />
              // }
              activeIcon={
                <UI.Icon
                  type="FontAwesome"
                  size={20}
                  name="bookmark"
                  color={primaryColor}
                />
              }
              // count={product ? product.saves.length : 0}
              onClick={() => setLikeCount(likeCount + 1)}
            />
            <UI.Spacer />
            <View style={styles.share}>
              <UI.ActivityButton
                inActiveIcon={
                  <UI.Icon size={22} name="md-share" color={info} />
                }
                onClick={() => setLikeCount(likeCount - 1)}
              />
            </View>
          </View>

          <UI.Spacer />

          <View style={styles.container}>
            <UI.Text style={styles.title} size={22}>
              {p.name}
            </UI.Text>
          </View>

          <View>
            <UI.Accordion initialIndex={0}>
              <UI.AccordionItem headerText="Description">
                <UI.Text>{p.description}</UI.Text>
              </UI.AccordionItem>
              <UI.AccordionItem headerText="Item Specifications">
                <UI.ListItem
                  left={<UI.Text heading>Quantity</UI.Text>}
                  right={<UI.Text>{p.quantity}</UI.Text>}
                />
                <UI.ListItem
                  left={<UI.Text heading>Price for 1</UI.Text>}
                  right={<UI.Text>{formatMoney(p.price)}</UI.Text>}
                />
                <UI.ListItem
                  left={<UI.Text heading>Shipping Cost</UI.Text>}
                  right={
                    <UI.Text>
                      {p.shipping ? formatMoney(p.shipping) : 'Free'}
                    </UI.Text>
                  }
                />
                {(p.percentageDiscount || p.fixedDiscount) && (
                  <UI.ListItem
                    left={<UI.Text heading>Discount</UI.Text>}
                    right={
                      <UI.Text>
                        {p.fixedDiscount
                          ? formatMoney(p.fixedDiscount)
                          : p.percentageDiscount + ' %'}
                      </UI.Text>
                    }
                  />
                )}
                {p.specifications
                  ? p.specifications.map((spec) => {
                      return (
                        <UI.ListItem
                          key={spec.id}
                          left={<UI.Text heading>{spec.specification}</UI.Text>}
                          body={
                            <View
                              style={{
                                justifyContent: 'center',
                              }}>
                              <UI.Text>{spec.value}</UI.Text>
                            </View>
                          }
                        />
                      );
                    })
                  : null}
                <UI.Spacer />
                {product && (
                  <UI.Link
                    onClick={() =>
                      navigation.navigate('VendorShop', {
                        id: product.vendor.id,
                      })
                    }>
                    Vendor Details
                  </UI.Link>
                )}
              </UI.AccordionItem>
              <UI.AccordionItem headerText="Shipping Information">
                <UI.Row style={{ justifyContent: 'space-between' }}>
                  <UI.Text heading>Shipping Cost: </UI.Text>
                  <UI.Text>{formatMoney(p.shipping)}</UI.Text>
                </UI.Row>
                <UI.Text>
                  The product is to be shipped within 3 - 5 business days from
                  the day of purchase. {'\n'}If not received after 5 days from
                  the day of purchase, feel free to contact the support team.
                </UI.Text>
                <UI.Spacer />
                <UI.Text note color="">
                  Items are sold and shipped by{' '}
                  <UI.Text note>
                    {product && product.vendor
                      ? product.vendor.profile.name
                      : null}
                  </UI.Text>
                </UI.Text>
              </UI.AccordionItem>
              <UI.AccordionItem headerText="Buyer Guarantee">
                <UI.Text bold>Shop with confidence!</UI.Text>
                <UI.Text>
                  We want you to be comletely satisfied with your purchase on
                  MyPorts! {'\n'}Feel free to retur all products within 30 days
                  of purchase if they are not up to your satisfaction.
                </UI.Text>
              </UI.AccordionItem>
            </UI.Accordion>
          </View>

          <UI.Spacer />

          <View style={styles.container}>
            <UI.Spacer medium />

            <View>
              <UI.Text heading>Quantity</UI.Text>
              <UI.TextInput
                keyboardType="number-pad"
                placeholder="Enter quantity"
              />
            </View>

            <UI.Spacer />

            <UI.Button>
              <UI.Text color="#fff">Add to cart</UI.Text>
            </UI.Button>
            <UI.Spacer />
            <UI.Button type="ghost">
              <UI.Text>Save for later</UI.Text>
            </UI.Button>
          </View>

          <UI.Divider />

          <UI.Spacer medium />

          <View style={styles.container}>
            <UI.Row
              style={{
                justifyContent: 'space-between',
              }}>
              <UI.Text style={styles.title} size={20}>
                Comments
              </UI.Text>
              {comments.length > 3 && (
                <UI.Link
                  onClick={() =>
                    navigation.navigate('ProductComments', {
                      id: p.id,
                      name: p.name,
                    })
                  }>
                  See All Comments
                </UI.Link>
              )}
            </UI.Row>
            <View>
              <UI.Spacer medium />
              {showCommentBox && (
                <UI.TextInput
                  onChangeText={(value) => setCommentText(value)}
                  value={commentText}
                  multiline
                  placeholder="Write your comment..."
                />
              )}

              <UI.Spacer />
              {!showCommentBox && (
                <UI.Button onClick={() => setShowCommentBox(true)}>
                  <UI.Text color="#fff">Write a comment</UI.Text>
                </UI.Button>
              )}
              {showCommentBox && (
                <UI.Button
                  type={createCommentLoading ? 'disabled' : ''}
                  onClick={() => handleCreateComment()}>
                  {createCommentLoading ? (
                    <UI.Spinner show area={30} />
                  ) : (
                    <UI.Text color="#fff">Submit</UI.Text>
                  )}
                </UI.Button>
              )}
              <UI.Spacer medium />
            </View>
            {comments.length > 0 &&
              comments.map((comment, i) => {
                if (i > 2) return;
                return (
                  <Comment
                    key={comment.id}
                    date={moment(comment.createdAt).format('DD/MM/YYYY')}
                    image={{ uri: comment.customer.photo }}
                    name={`${comment.customer.firstName} ${comment.customer.lastName}`}
                    comment={comment.comment}
                  />
                );
              })}
            {!comments.length > 0 && !commentsLoading && (
              <>
                <UI.Spacer large />
                <EmptyItem
                  icon={
                    <UI.Icon color={info} size={100} name="ios-chatboxes" />
                  }
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
                  <View style={{ justifyContent: 'center' }}>
                    <View style={{ width: 150, height: 10 }} />
                  </View>
                  <View>
                    <View style={{ width: 320, height: 10, marginTop: 10 }} />
                    <View style={{ width: 290, height: 10, marginTop: 5 }} />
                    <View style={{ width: 300, height: 10, marginTop: 5 }} />
                  </View>
                </Skeleton>
              </UI.Row>
            )}
          </View>
        </View>
        <UI.Spacer large />
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  featured: {
    width: '100%',
    height: 300,
  },
  layout: {
    paddingHorizontal: 0,
  },
  container: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  titleContainer: {
    position: 'absolute',
    height: 250,
    width: '100%',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 70,
  },
  title: {
    fontFamily: 'SFPD-regular',
  },
  activities: {
    height: 60,
    width: '100%',
    borderBottomColor: grayColor,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  share: {
    alignItems: 'flex-end',
    flex: 1,
  },
  category: {
    position: 'absolute',
    right: 10,
    backgroundColor: '#0009',
    paddingHorizontal: 5,
    top: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  bottomCart: {
    position: 'absolute',
    height: 60,
    width: '100%',
    elevation: 5,
    bottom: 0,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    offline: !state.network.isConnected,
    customer: state.customer.profile,
  };
};

export default connect(mapStateToProps)(SingleProductScreen);
