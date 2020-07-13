import gql from 'graphql-tag';

export const REVIEWS = gql`
  query reviews($id: String!) {
    reviews(id: $id) {
      id
      customer {
        id
        photo
        firstName
        lastName
      }
      comment
      rating
      createdAt
      updatedAt
      vendor {
        id
      }
    }
  }
`;
