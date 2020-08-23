import gql from 'graphql-tag';

export const ORDER_HISTORY = gql`
  query orderHistory($id: String!) {
    orderHistory(id: $id) {
      id
      orderNo
      status
      customer {
        id
      }
      items {
        id
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
        quantity
        order {
          id
          orderNo
          status
          createdAt
          updatedAt
        }
        customer {
          id
        }
        vendor {
          id
        }
        amount
        address {
          id
          state
          city
          lga
          phone
          address
          postalCode
          name
          customer {
            id
          }
          default {
            id
            address {
              id
            }
            customer {
              id
            }
          }
          status
        }
        status
        createdAt
        updatedAt
      }
      updatedAt
      createdAt
    }
  }
`;

export const VENDOR_ORDERS = gql`
  query vendorOrders($id: String!) {
    vendorOrders(id: $id) {
      id
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
      quantity
      order {
        id
        orderNo
        status
        createdAt
        updatedAt
      }
      customer {
        id
      }
      vendor {
        id
      }
      amount
      address {
        id
        state
        city
        lga
        phone
        address
        postalCode
        name
        customer {
          id
        }
        default {
          id
          address {
            id
          }
          customer {
            id
          }
        }
        status
      }
      status
      createdAt
      updatedAt
    }
  }
`;
