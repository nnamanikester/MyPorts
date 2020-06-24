// import { gql } from 'apollo-boost';
import gql from 'graphql-tag';

export const CREATE_VENDOR = gql`
  mutation createVednor(
    $shopName: String!
    $email: String!
    $phone: String!
    $logo: Upload
    $coverPhoto: Upload
    $description: String
  ) {
    createVendor(
      name: $shopName
      email: $email
      phone: $phone
      logo: $logo
      coverPhoto: $coverPhoto
      description: $description
    ) {
      id
      username
      email
      isCustomer
      vendor
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
      customer {
        id
        firstName
        lastName
        phone
        photo
      }
    }
  }
`;
