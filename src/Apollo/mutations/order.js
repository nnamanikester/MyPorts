import gql from 'graphql-tag';

export const CREATE_ORDER = gql`
  mutation createOrder(
    $data: OrderCreateInput!
    $cart: String!
    $products: ProductOrderInput!
  ) {
    createOrder(data: $data, cart: $cart, products: $products) {
      id
      orderNo
      status
      items {
        id
        address {
          id
        }
        amount
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
            id
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
        customer {
          id
        }
        vendor {
          id
        }
        order {
          id
        }
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
