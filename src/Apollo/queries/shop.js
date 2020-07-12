import gql from 'graphql-tag';

export const GET_SHOPS = gql`
  query(
    $where: VendorWhereInput
    $orderBy: VendorOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    shops(
      where: $where
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
          user {
            id
          }
          featured
          profile {
            id
            name
            email
            phone
            logo
            coverPhoto
            description
          }
          isVerified
          status
        }
      }
    }
  }
`;

export const GET_SHOP = gql`
  query shop($id: String!) {
    shop(id: $id) {
      id
      isVerified
      reviews
      products
      status
      profile {
        id
        name
        email
        phone
        description
        location
        logo
        coverPhoto
      }
    }
  }
`;
