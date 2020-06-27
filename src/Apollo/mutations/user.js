import gql from 'graphql-tag';

export const UPDATE_USER_EMAIL = gql`
  mutation updateUserEmail($email: String!, $password: String!) {
    updateEmail(email: $email, password: $password) {
      email
    }
  }
`;
