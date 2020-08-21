import gql from 'graphql-tag';

export const UPDATE_USER_EMAIL = gql`
  mutation updateUserEmail($email: String!, $password: String!) {
    updateUserEmail(email: $email, password: $password) {
      id
      username
      email
      isVendor
      isCustomer
      status
    }
  }
`;

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($newPassword: String!, $oldPassword: String!) {
    updateUserPassword(newPassword: $newPassword, oldPassword: $oldPassword) {
      id
    }
  }
`;
