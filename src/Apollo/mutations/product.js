import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $id: String!
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
      id: $id
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
