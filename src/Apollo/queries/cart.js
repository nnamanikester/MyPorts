import gql from 'graphql-tag';

export const CART = gql`
  query cart($customerId: String!) {
    cart(customerId: $customerId) {
      id
      quantity
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
