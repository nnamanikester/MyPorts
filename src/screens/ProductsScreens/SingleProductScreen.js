import React from 'react';
import Swiper from 'react-native-swiper';
import {StyleSheet, View, Image, ToastAndroid, Alert} from 'react-native';
import * as UI from '../../components/common';
import Comment from '../../components/Comment';
import {useLazyQuery, useMutation} from '@apollo/react-hooks';
import {PRODUCT_COMMENTS, GET_SINGLE_PRODUCT} from '../../apollo/queries';
import {
  CREATE_COMMENT,
  CREATE_LIKE,
  CREATE_SAVE,
  CREATE_SHARE,
  ADD_ITEM_TO_CART,
} from '../../apollo/mutations';
import {formatMoney, formatShortNumber} from '../../utils';
import EmptyItem from '../../components/EmptyItem';
import Skeleton from 'react-native-skeleton-placeholder';
import {
  grayColor,
  info,
  danger,
  primaryColor,
} from '../../components/common/variables';
import {connect} from 'react-redux';
import moment from 'moment';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-community/async-storage';
import {CART_STORAGE} from '../../constants';
import {setCartStorage} from '../../redux/actions/CartActions';
import ScreenHeaderWithCart from '../../components/ScreenHeaderWithCart';

const SingleProductScreen = ({
  navigation,
  route: {params},
  offline,
  customer,
  setCartStorage,
  cart,
}) => {
  const p = params.product;
  const [comments, setComments] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const [commentText, setCommentText] = React.useState('');
  const [showCommentBox, setShowCommentBox] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [quantity, setQuantity] = React.useState(`${p.quantity}`);
  const [errors, setErrors] = React.useState({});
  const [modalOpen, setModalOpen] = React.useState(false);

  // Queries and mutations
  const [
    getProduct,
    {data: productData, loading: productLoading, error: productError, refetch},
  ] = useLazyQuery(GET_SINGLE_PRODUCT, {
    variables: {id: p.id},
    pollInterval: 500,
  });

  const [
    getComments,
    {data: commentData, loading: commentsLoading},
  ] = useLazyQuery(PRODUCT_COMMENTS, {
    variables: {id: p.id},
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

  const [likeProduct] = useMutation(CREATE_LIKE, {
    variables: {
      productId: p.id,
      customerId: customer.id,
    },
  });

  const [saveProduct] = useMutation(CREATE_SAVE, {
    variables: {
      productId: p.id,
      customerId: customer.id,
    },
  });

  const [shareProduct] = useMutation(CREATE_SHARE, {
    variables: {
      productId: p.id,
      customerId: customer.id,
    },
  });

  const [addItemToCart, {loading: addItemLoading}] = useMutation(
    ADD_ITEM_TO_CART,
  );

  // Functions to run on component mount
  React.useEffect(() => {
    if (!offline) {
      // get data and comments if not offline
      getProduct();
      getComments();
    }

    // Set Fetched data to product state
    if (productData) {
      setProduct(productData.product);
      productData.product.likes.forEach((l) => {
        if (l.customer.id === customer.id) {
          return setLiked(true);
        }
      });
      productData.product.saves.forEach((s) => {
        if (s.customer.id === customer.id) {
          return setSaved(true);
        }
      });
    }

    // Alert the user if an error occured while fetching producs
    if (productError) {
      ToastAndroid.show(
        "Error Loading Product!. \nPlease check if you're connected to the internet",
        ToastAndroid.LONG,
      );
    }
  }, [
    productError,
    productData,
    getProduct,
    customer.id,
    getComments,
    offline,
  ]);

  React.useEffect(() => {
    // Set fetched comments to the comment state
    if (commentData) {
      setComments(commentData.productComments);
    }

    // clear search text and hide comment box after creating a comment
    if (createCommentData) {
      setShowCommentBox(false);
      setCommentText('');
    }

    // Alert the user if an error occured while creating comment
    if (createCommentError) {
      Alert.alert('Error', 'Unable to comment at the time. Please try again!');
    }
  }, [commentData, createCommentData, createCommentError]);

  // Function call when the user sumits the comment
  const handleCreateComment = () => {
    if (!commentText) {
      return;
    }
    createComment({
      variables: {
        comment: commentText,
        productId: p.id,
        customerId: customer.id,
      },
    });
  };

  const handleLike = () => {
    setLiked(!liked);
    likeProduct()
      .then((res) => {
        setProduct(res.data.createProductLike);
      })
      .catch(() => {
        setLiked(false);
        ToastAndroid.show(
          'An error occured, Please try again later!',
          ToastAndroid.SHORT,
        );
      });
  };

  const handleSave = () => {
    setSaved(!saved);
    saveProduct()
      .then((res) => {
        setProduct(res.data.createProductSave);
        ToastAndroid.show(
          !saved ? 'Product Saved!' : 'Unsaved!',
          ToastAndroid.SHORT,
        );
      })
      .catch(() => {
        setSaved(false);
        ToastAndroid.show(
          'An error occured while saving this product!',
          ToastAndroid.SHORT,
        );
      });
  };

  const handleShare = () => {
    const options = {
      message: p.description,
      title: p.name,
      filename: p.name,
      url: p.images[0].url,
    };

    Share.open(options)
      .then(() => {
        shareProduct();
        console.log('shared');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleQuantity = (val) => {
    setErrors({});
    setQuantity(val);
    if (val > p.quantity) {
      setErrors({
        quantity: `Quantity cannot be greater than ${p.quantity}`,
      });
      return false;
    }
    if (!val || val < 1) {
      setErrors({
        quantity: 'Quantity is required and should not be less than 1',
      });
      return false;
    }
    return true;
  };

  const handleAddToCart = () => {
    if (!handleQuantity(quantity)) {
      return;
    }

    // Chech if product is already in cart
    if (cart && cart.items) {
      let counter = 0;
      cart.items.forEach((i) => {
        if (i.product.id === p.id) {
          counter++;
        }
      });
      if (counter > 0) {
        return ToastAndroid.show('Item already in cart', ToastAndroid.SHORT);
      }
    }

    addItemToCart({
      variables: {
        customerId: customer.id,
        quantity: parseInt(quantity),
        productId: p.id,
      },
    })
      .then(async (res) => {
        await AsyncStorage.setItem(
          CART_STORAGE,
          JSON.stringify(res.data.addItemToCart),
        );
        setCartStorage(res.data.addItemToCart);
        ToastAndroid.show('Item added to cart!', ToastAndroid.SHORT);
        setModalOpen(true);
      })
      .catch((e) => {
        Alert.alert('Error!', 'Unalbe to add item to cart. Please try again');
      });
  };

  return (
    <>
      <UI.Loading show={productLoading} />

      <ScreenHeaderWithCart
        navigation={navigation}
        icon="back"
        title={p.name}
      />

      <UI.Layout onRefresh={() => refetch()} style={styles.layout}>
        <Swiper animated autoplayTimeout={5} height={300} loop autoplay>
          {p &&
            p.images.map((img, i) => {
              return (
                <View key={img + i}>
                  <Image style={styles.featured} source={{uri: img.url}} />
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
              inActiveIcon={
                !liked ? (
                  <UI.Icon
                    type="FontAwesome"
                    size={20}
                    name="heart-o"
                    color={info}
                  />
                ) : null
              }
              activeIcon={
                liked ? (
                  <UI.Icon
                    type="FontAwesome"
                    size={20}
                    name="heart"
                    color={danger}
                  />
                ) : null
              }
              count={
                product && product.likes
                  ? formatShortNumber(product.likes.length)
                  : 0
              }
              onClick={() => handleLike()}
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
              count={comments ? formatShortNumber(comments.length) : 0}
            />
            <UI.Spacer medium />
            <UI.ActivityButton
              inActiveIcon={
                !saved ? (
                  <UI.Icon
                    type="FontAwesome"
                    size={20}
                    name="bookmark-o"
                    color={info}
                  />
                ) : null
              }
              activeIcon={
                saved ? (
                  <UI.Icon
                    type="FontAwesome"
                    size={20}
                    name="bookmark"
                    color={primaryColor}
                  />
                ) : null
              }
              count={
                product && product.saves
                  ? formatShortNumber(product.saves.length)
                  : 0
              }
              onClick={() => handleSave()}
            />
            <UI.Spacer />
            <View style={styles.share}>
              <UI.ActivityButton
                inActiveIcon={
                  <UI.Icon size={22} name="md-share" color={info} />
                }
                onClick={() => handleShare()}
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
                  ? p.specifications.map((spec, i) => {
                      return (
                        <UI.ListItem
                          key={spec.id + i}
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
              </UI.AccordionItem>
              <UI.AccordionItem headerText="Shipping Information">
                <UI.Row style={{justifyContent: 'space-between'}}>
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
              {errors.quantity ? (
                <UI.Text note color="red">
                  {errors.quantity}
                </UI.Text>
              ) : null}
              <UI.TextInput
                keyboardType="number-pad"
                placeholder="Enter quantity"
                value={quantity}
                onChangeText={(value) => handleQuantity(value)}
              />
            </View>

            <UI.Spacer />

            <UI.Button
              type={addItemLoading ? 'disabled' : null}
              onClick={() => handleAddToCart()}>
              {addItemLoading ? (
                <UI.Text style={{textTransform: 'lowercase'}}>
                  Adding...
                </UI.Text>
              ) : (
                <UI.Text color="#fff">Add to cart</UI.Text>
              )}
            </UI.Button>
            <UI.Spacer />
            <UI.Button type="ghost" onClick={() => handleSave()}>
              <UI.Text>{saved ? 'Unsave Product' : 'Save for later'}</UI.Text>
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
                if (i > 2) {
                  return null;
                }
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
        </View>
        <UI.Spacer large />
      </UI.Layout>

      {/* ITEM ADDED TO CART SUCCESS MODAL */}
      <UI.Modal show={modalOpen}>
        <UI.Text h3>Item Added to Cart!</UI.Text>

        <UI.Spacer large />

        <Image
          style={{width: 150, height: 150}}
          source={{uri: p.images[0].url}}
        />
        <UI.Text style={{textAlign: 'center'}}>{p.name}</UI.Text>
        <UI.Text style={{textAlign: 'center'}} bold>
          {formatMoney(p.price * quantity)}
        </UI.Text>
        <UI.Text style={{textAlign: 'center'}}>{quantity}</UI.Text>

        <UI.Spacer large />

        <UI.Button
          onClick={() => {
            setModalOpen(false);
            navigation.navigate('Cart');
          }}>
          <UI.Text color="#fff">
            Go to cart {'  '} <UI.Icon name="md-cart" color="#fff" size={18} />
          </UI.Text>
        </UI.Button>

        <UI.Spacer />

        <UI.Button type="ghost" onClick={() => setModalOpen(false)}>
          <UI.Text>Continue Shopping</UI.Text>
        </UI.Button>
      </UI.Modal>
      {/* /ITEM ADDED TO CART SUCCESS MODAL */}
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
    backgroundColor: primaryColor,
    paddingHorizontal: 5,
    top: 10,
    color: '#fff',
    fontSize: 13,
    textTransform: 'uppercase',
    borderRadius: 5,
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
    cart: state.cart,
  };
};

export default connect(mapStateToProps, {setCartStorage})(SingleProductScreen);
