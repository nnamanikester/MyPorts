import gql from 'graphql-tag';

export const UPDATE_NOTIFICATION = gql`
  mutation updateNotification(
    $data: NotificationUpdateInput!
    $where: NotificationWhereUniqueInput!
  ) {
    updateNotification(data: $data, where: $where) {
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
`;
