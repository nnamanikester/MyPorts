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

export const GET_VENDOR_REPORTS = gql`
  {
    vendorReports {
      orders {
        today
        week
        month
        total
      }
      sales {
        today
        week
        month
        total
      }
      transactions {
        today
        week
        month
        total
      }
      reviews {
        today
        week
        month
        total
      }
      comments {
        today
        week
        month
        total
      }
    }
  }
`;
