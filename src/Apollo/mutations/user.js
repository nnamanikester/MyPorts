import gql from 'graphql-tag';

export const UPDATE_USER_EMAIL = gql`
  updateUserEmail($email: String!, $password: String!) {
    updateEmail(email: $email, password: $password) {
      email
    }
  }
`;
