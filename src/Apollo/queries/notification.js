import gql from 'graphql-tag';

export const NOTIFICATIONS = gql`
  query notifications(
    $where: NotificationWhereInput
    $orderBy: NotificationOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    notifications(
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
          type
          status
          message
          createdAt
          updatedAt
        }
      }
    }
  }
`;
