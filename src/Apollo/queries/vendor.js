import gql from 'graphql-tag';

export const VENDOR_PROFILE = gql`
  {
    vendorProfile {
      id
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

export const GET_VENDOR_PRODUCTS = gql`
  query vendorProducts(
    $orderBy: ProductOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    vendorProducts(
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          images {
            url
          }
          name
          createdAt
          price
        }
      }
    }
  }
`;
