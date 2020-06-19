import { gql } from 'apollo-boost';

export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        isVendor
        isCustomer
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signin(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
        isVendor
        isCustomer
      }
    }
  }
`;
