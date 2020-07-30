import gql from 'graphql-tag';

export const ADVERTS = gql`
  query adverts(
    $where: AdvertWhereInput
    $orderBy: AdvertOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    adverts(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          id
          url
          imageUrl
          rank
          type
          status
          createdAt
          updatedAt
        }
      }
    }
  }
`;
