import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $description: String!
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
