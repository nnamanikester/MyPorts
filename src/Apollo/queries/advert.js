import gql from 'graphql-tag';

export const ADVERTS = gql`
  {
    adverts {
      id
      url
      imageUrl
      rank
      type
      createdAt
      updatedAt
    }
  }
`;
