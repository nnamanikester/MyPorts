import { gql } from 'apollo-boost';

export const UPDATE_ACCOUNT_TYPE = gql`
  mutation updateAccountType($type: String!) {
    updateAccountType(type: $type) {
      id
    }
  }
`;

export const CREATE_WALLET = gql`
  mutation createWallet($firstName: String!, $lastName: String!) {
    createWallet(firstName: $firstName, lastName: $lastName) {
      id
    }
  }
`;

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
    }
  }
`;

export const CREATE_CUSTOMER = gql`
  mutation createVednor(
    $firstName: String!
    $lastName: String!
    $phone: String
    $photo: Upload
  ) {
    createVendor(
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      imageUrl: $photo
    ) {
      id
    }
  }
`;
