import gql from 'graphql-tag';

export const GET_ACTIVE_CHAT = gql`
  query getActiveChat($customerId: String!, $vendorId: String!) {
    getActiveChat(customerId: $customerId, vendorId: $vendorId) {
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
      status
      createdAt
      updatedAt
    }
  }
`;

export const GET_VENDOR_CHATS = gql`
  query getVendorChats($id: String!) {
    getVendorChats(id: $id) {
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
        photo
        firstName
        lastName
      }
      status
      createdAt
      updatedAt
    }
  }
`;
