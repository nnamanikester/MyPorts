import gql from 'graphql-tag';

export const SEND_MESSAGE = gql`
  mutation sendMessage($sender: String!, $chatId: String!, $message: String!) {
    sendMessage(sender: $sender, chatId: $chatId, message: $message) {
      id
      sender {
        id
      }
      message
      chat {
        id
      }
      status
      createdAt
      updatedAt
    }
  }
`;
