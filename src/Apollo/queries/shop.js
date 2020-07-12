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
          reviews {
            id
            rating
          }
          featured
          profile {
            id
            name
            email
            phone
            logo
            location
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
      reviews {
        id
        customer {
          id
          firstName
          lastName
          phone
          photo
        }
        rating
        comment
      }
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
