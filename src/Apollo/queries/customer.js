import gql from 'graphql-tag';

export const CUSTOMER_PROFILE = gql`
  {
    customerProfile {
      id
      firstName
      lastName
      photo
    }
  }
`;
