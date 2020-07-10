import gql from 'graphql-tag';

export const GET_ADDRESSES = gql`
  query addresses($customerId: String!) {
    addresses(customerId: $customerId) {
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
  }
`;
