import { gql } from 'apollo-boost';

export const GET_USER_TYPE = gql`
  query user($token: String!) {
    user(token: $token) {
      isVendor
      isCustomer
    }
  }
`;
