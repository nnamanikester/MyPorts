import gql from 'graphql-tag';

export const VENDOR_PROFILE = gql`
  {
    vendorProfile {
      coverPhoto
      logo
      name
      email
      phone
      description
    }
  }
`;

export const VENDOR = gql`
  {
    getVendor {
      id
      products {
        id
      }
      reviews {
        id
        rating
        comment
      }
      isVerified
      chats {
        id
      }
      coupons {
        id
      }
      status
    }
  }
`;
