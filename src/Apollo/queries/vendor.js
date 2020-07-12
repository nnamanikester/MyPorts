import gql from 'graphql-tag';

export const VENDOR = gql`
  {
    getVendor {
      id
      isVerified
      status
      profile {
        id
        coverPhoto
        logo
        name
        email
        phone
        location
        description
      }
    }
  }
`;

export const GET_VENDOR_ANALYTICS = gql`
  {
    vendorAnalytics {
      balance
      products
      newOrders
      deliveredOrders
      transactions
    }
  }
`;
