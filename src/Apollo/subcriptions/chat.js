import gql from 'graphql-tag';

export const MESSAGE = gql`
  subscription message($where: MessagesubscriptionWhereInput!) {
    message(where: $where) {
      node {
        id
        message
      }
      updatedFields
      previousValues {
        id
      }
    }
  }
`;
