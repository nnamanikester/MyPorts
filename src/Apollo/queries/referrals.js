import gql from 'graphql-tag';

export const REFERRALS = gql`
  {
    referrals {
      id
      user
    }
  }
`;