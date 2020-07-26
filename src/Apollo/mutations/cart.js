import gql from 'graphql-tag';

export const ADD_ITEM_TO_CART = gql`
  mutation addItemToCart(
    $customerId: String!
    $productId: String!
    $quantity: Int!
  ) {
    addItemToCart(
      customerId: $customerId
      productId: $productId
      quantity: $quantity
    ) {
      id
      customer {
        id
      }
      items {
        id
        quantity
        product {
          id
          images {
            url
          }
          name
          createdAt
          price
          category {
            name
          }
          vendor {
            id
            profile {
              id
              name
            }
          }
          description
          quantity
          shipping
          specifications {
            value
            specification
          }
          fixedDiscount
          percentageDiscount
          status
          likes {
            id
            customer {
              id
            }
          }
          comments {
            id
            comment
            customer {
              id
              firstName
              lastName
              photo
            }
            createdAt
            updatedAt
          }
          saves {
            id
            customer {
              id
            }
          }
          shares {
            id
          }
          quantity
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const REMOVE_CART_ITEM = gql`
  mutation removeCartItem($cartId: String!, $itemId: String!) {
    removeCartItem(itemId: $itemId, cartId: $cartId) {
      id
      customer {
        id
      }
      items {
        id
        quantity
        product {
          id
          images {
            url
          }
          name
          createdAt
          price
          category {
            name
          }
          vendor {
            id
            profile {
              id
              name
            }
          }
          description
          quantity
          shipping
          specifications {
            value
            specification
          }
          fixedDiscount
          percentageDiscount
          status
          likes {
            id
            customer {
              id
            }
          }
          comments {
            id
            comment
            customer {
              id
              firstName
              lastName
              photo
            }
            createdAt
            updatedAt
          }
          saves {
            id
            customer {
              id
            }
          }
          shares {
            id
          }
          quantity
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const CLEAR_CART = gql`
  mutation clearCart($id: String!) {
    clearCartItem(id: $id) {
      id
      customer {
        id
      }
      items {
        id
        quantity
        product {
          id
          images {
            url
          }
          name
          createdAt
          price
          category {
            name
          }
          vendor {
            id
            profile {
              id
              name
            }
          }
          description
          quantity
          shipping
          specifications {
            value
            specification
          }
          fixedDiscount
          percentageDiscount
          status
          likes {
            id
            customer {
              id
            }
          }
          comments {
            id
            comment
            customer {
              id
              firstName
              lastName
              photo
            }
            createdAt
            updatedAt
          }
          saves {
            id
            customer {
              id
            }
          }
          shares {
            id
          }
          quantity
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
