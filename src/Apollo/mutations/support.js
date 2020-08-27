import gql from 'graphql-tag';

export const SUPPORT_TICKET = gql`
  mutation supportTicket($data: SupportTicketCreateInput!) {
    supportTicket(data: $data) {
      id
      ticketNo
      title
      message
      status
      user {
        id
      }
      updatedAt
      createdAt
    }
  }
`;
