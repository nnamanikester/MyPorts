import gql from 'graphql-tag';

export const CREATE_ADDRESS = gql`
  mutation createAddress(
    $state: String!
    $city: String
    $lga: String
    $phone: String!
    $address: String!
    $postalCode: String!
    $name: String!
    $customerId: String!
    $isDefault: Boolean!
  ) {
    createAddress(
      state: $state
      city: $city
      lga: $lga
      phone: $phone
      address: $address
      postalCode: $postalCode
      name: $name
      customerId: $customerId
      isDefault: $isDefault
    ) {
      id
      state
      city
      lga
      phone
      address
      postalCode
      name
      customer {
        id
      }
      default {
        id
        address {
          id
        }
        customer {
          id
        }
      }
      status
    }
  }
`;

export const UPDATE_ADDRESS = gql`
  mutation updateAddress(
    $id: String!
    $state: String!
    $city: String
    $lga: String
    $phone: String!
    $address: String!
    $postalCode: String!
    $name: String!
    $customerId: String!
    $isDefault: Boolean!
  ) {
    updateAddress(
      id: $id
      state: $state
      city: $city
      lga: $lga
      phone: $phone
      address: $address
      postalCode: $postalCode
      name: $name
      customerId: $customerId
      isDefault: $isDefault
    ) {
      id
      state
      city
      lga
      phone
      address
      postalCode
      name
      customer {
        id
      }
      default {
        id
        address {
          id
        }
        customer {
          id
        }
      }
      status
    }
  }
`;
