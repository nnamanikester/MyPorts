import gql from 'graphql-tag';

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer(
    $id: String!
    $firstName: String!
    $lastName: String!
    $phone: String
    $gender: String
    $birthMonth: Int
    $birthDay: Int
  ) {
    updateCustomer(
      id: $id
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      gender: $gender
      birthMonth: $birthMonth
      birthDay: $birthDay
    ) {
      id
      firstName
      lastName
      photo
      phone
      birthMonth
      birthDay
      gender
    }
  }
`;
