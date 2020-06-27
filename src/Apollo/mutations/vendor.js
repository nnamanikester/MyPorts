import gql from 'graphql-tag';

export const UPDATE_VENDOR_PROFILE = gql`
  mutation updateVendorProfile(
    $name: String!
    $email: String!
    $phone: String!
    $description: String
  ) {
    updateVendor(
      name: $name
      email: $email
      phone: $phone
      description: $description
    ) {
      id
      coverPhoto
      logo
      name
      email
      phone
      description
    }
  }
`;
