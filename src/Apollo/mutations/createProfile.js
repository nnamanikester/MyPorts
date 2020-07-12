// import { gql } from 'apollo-boost';
import gql from 'graphql-tag';

export const CREATE_VENDOR = gql`
  mutation createVednor(
    $name: String!
    $email: String!
    $phone: String!
    $logo: Upload
    $location: String
    $coverPhoto: Upload
    $description: String
  ) {
    createVendor(
      name: $name
      email: $email
      phone: $phone
      logo: $logo
      location: $location
      coverPhoto: $coverPhoto
      description: $description
    ) {
      id
      username
      email
      isVendor
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation createCustomer(
    $firstName: String!
    $lastName: String!
    $phone: String
  ) {
    createCustomer(firstName: $firstName, lastName: $lastName, phone: $phone) {
      id
      username
      email
      isCustomer
    }
  }
`;
