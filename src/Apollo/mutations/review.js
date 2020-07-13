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
