import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query products(
    $orderBy: ProductOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    products(
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
          status
        }
      }
    }
  }
`;
