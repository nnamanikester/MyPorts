import gql from 'graphql-tag';

export const UPDATE_USER_EMAIL = gql`
  mutation updateUserEmail($email: String!, $password: String!) {
    updateUserEmail(email: $email, password: $password) {
      id
      username
      email
      isVendor
      isCustomer
    }
  }
`;
