import gql from 'graphql-tag';

export const UPDATE_VENDOR_PROFILE = gql`
  mutation updateVendorProfile(
    $name: String!
    $email: String!
    $phone: String!
    $description: String
    $coverPhoto: Upload
    $logo: Upload
  ) {
    updateVendor(
      name: $name
      email: $email
      phone: $phone
      description: $description
      coverPhoto: $coverPhoto
      logo: $logo
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
