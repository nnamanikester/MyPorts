import {gql} from 'apollo-boost';

export const GET_USER_TYPE = gql`
  query user($token: String!) {
    user(token: $token) {
      isVendor
      isCustomer
    }
  }
`;

export const VALIDATE_EMAIL = gql`
  query validateEmail($email: String!) {
    validateEmail(email: $email) {
      id
      email
    }
  }
`;

export const VALIDATE_USERNAME = gql`
  query validateUsername($username: String!) {
    validateUsername(username: $username) {
      id
      username
    }
  }
`;

export const VALIDATE_PASSWORD = gql`
  query($password: String!) {
    validatePassword(password: $password) {
      id
    }
  }
`;
