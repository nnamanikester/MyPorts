import gql from 'graphql-tag';

const VENDOR_PROFILE = gql`
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
