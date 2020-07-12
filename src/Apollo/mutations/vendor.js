import gql from 'graphql-tag';

export const UPDATE_VENDOR_PROFILE = gql`
  mutation updateVendorProfile(
    $id: String!
    $name: String!
    $email: String!
    $phone: String!
    $description: String
    $location: String
  ) {
    updateVendorProfile(
      id: $id
      name: $name
      email: $email
      phone: $phone
      description: $description
      location: $location
    ) {
      id
      coverPhoto
      logo
      name
      email
      phone
      description
      location
    }
  }
`;
