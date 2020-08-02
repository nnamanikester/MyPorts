import gql from 'graphql-tag';

export const GET_MESSAGES = gql`
  query messages($id: String!) {
    messages(id: $id) {
      id
      chat {
        id
      }
      message
      sender {
        id
      }
      status
      createdAt
      updatedAt
    }
  }
`;
