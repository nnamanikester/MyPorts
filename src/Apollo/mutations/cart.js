import gql from 'graphql-tag';

export const ADD_ITEM_TO_CART = gql`
  mutation addItemToCart($customerId: String!, $productId: String!) {
    addItemToCart(customerId: $customerId, productId: $productId) {
      id
      customer {
        id
      }
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
      }
      createdAt
      updatedAt
    }
  }
`;
