import gql from 'graphql-tag';

export const VENDOR_PROFILE = gql`
  {
    vendorProfile {
      coverPhoto
      logo
      name
      email
      phone
      description
    }
  }
`;
