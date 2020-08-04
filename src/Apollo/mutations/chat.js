import gql from 'graphql-tag';

export const CREATE_CHAT = gql`
  mutation createChat($customerId: String!, $vendorId: String!) {
    createChat(customerId: $customerId, vendorId: $vendorId) {
      id
      messages {
        id
        message
        sender {
          id
        }
        createdAt
        updatedAt
      }
      vendor {
        id
      }
      customer {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const END_CHAT = gql`
  mutation endChat($id: String!) {
    endChat(id: $id) {
      id
      messages {
        id
        message
        sender {
          id
        }
        createdAt
        updatedAt
      }
      vendor {
        id
      }
      customer {
        id
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CHAT = gql`
  mutation deleteChat($id: String!) {
    deleteChat(id: $id) {
      id
    }
  }
`;
