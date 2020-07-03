import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $description: String!
    $category: String!
    $images: [ProductImageInput!]!
    $specifications: [ProductSpecificationInput!]!
    $quantity: Int!
    $price: Float!
    $shipping: Float!
    $fixedDiscount: Float
    $percentageDiscount: Int
    $status: Int!
  ) {
    createProduct(
      name: $name
      description: $description
      category: $category
      images: $images
      specifications: $specifications
      quantity: $quantity
      price: $price
      shipping: $shipping
      fixedDiscount: $fixedDiscount
      percentageDiscount: $percentageDiscount
      status: $status
    ) {
      id
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createProductComment(
    $customerId: String!
    $comment: String!
    $productId: String!
  ) {
    createProductComment(
      customerId: $custommerId
      comment: $comment
      productId: $productId
    ) {
      id
      comment
      customer {
        id
        firstName
        lastName
        photo
        createdAt
      }
    }
  }
`;
