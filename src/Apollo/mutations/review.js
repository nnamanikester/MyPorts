import gql from 'graphql-tag';

export const CREATE_REVIEW = gql`
  mutation createReview(
    $customerId: String!
    $vendorId: String!
    $comment: String!
    $rating: Int!
  ) {
    createReview(
      customerId: $customerId
      vendorId: $vendorId
      comment: $comment
      rating: $rating
    ) {
      id
      vendor {
        id
      }
      customer {
        id
      }
      comment
      rating
    }
  }
`;

export const UPDATE_REVIEW = gql`
  mutation updateReview($id: String!, $comment: String, $rating: Int) {
    updateReview(id: $id, comment: $comment, rating: $rating) {
      id
      vendor {
        id
      }
      customer {
        id
      }
      comment
      rating
    }
  }
`;
