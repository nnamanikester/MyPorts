import gql from 'graphql-tag';

export const SUBSCRIBE_TO_PRODUCT_LIKE = gql`
  subscription productLike($where: ProductLikeSubscriptionWhereInput) {
    productLike(where: $where) {
      node {
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
      }
    }
  }
`;

export const SUBSCRIBE_TO_PRODUCT = gql`
  subscription product($where: ProductSubscriptionWhereInput) {
    product(where: $where) {
      node {
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
    }
  }
`;
