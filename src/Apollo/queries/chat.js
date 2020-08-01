import gql from 'graphql-tag';

export const GET_ACTIVE_CHAT = gql`
  query getActiveChat($customerId: String!, $vendorId: String!) {
    getActiveChat(customerId: $customerId, vendorId: $vendorId) {
      id
      messages {
        id
        message
        from {
          id
        }
        to {
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
