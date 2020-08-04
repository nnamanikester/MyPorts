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
      customerId: $customerId
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

export const CREATE_LIKE = gql`
  mutation createProductLike($customerId: String!, $productId: String!) {
    createProductLike(customerId: $customerId, productId: $productId) {
      id
      images {
        url
      }
      name
      createdAt
      price
      category {
        name
        id
      }
      vendor {
        id
        profile {
          id
          name
        }
      }
      description
      quantity
      shipping
      specifications {
        value
        specification
      }
      fixedDiscount
      percentageDiscount
      status
      likes {
        id
        customer {
          id
        }
      }
      comments {
        id
        comment
        customer {
          id
          firstName
          lastName
          photo
        }
        createdAt
        updatedAt
      }
      saves {
        id
        customer {
          id
        }
      }
      shares {
        id
      }
    }
  }
`;

export const CREATE_SAVE = gql`
  mutation createProductSave($customerId: String!, $productId: String!) {
    createProductSave(customerId: $customerId, productId: $productId) {
      id
      images {
        url
      }
      name
      createdAt
      price
      category {
        name
        id
      }
      vendor {
        id
        profile {
          id
          name
        }
      }
      description
      quantity
      shipping
      specifications {
        value
        specification
      }
      fixedDiscount
      percentageDiscount
      status
      likes {
        id
        customer {
          id
        }
      }
      comments {
        id
        comment
        customer {
          id
          firstName
          lastName
          photo
        }
        createdAt
        updatedAt
      }
      saves {
        id
        customer {
          id
        }
      }
      shares {
        id
      }
    }
  }
`;

export const CREATE_SHARE = gql`
  mutation createProductShare($customerId: String!, $produdctId: String!) {
    createProductShare(customerId: $customerId, productId: $productId) {
      id
      customer {
        id
      }
      product {
        id
      }
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: String!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct(
    $data: ProductUpdateInput!
    $where: ProductWhereUniqueInput!
  ) {
    updateProduct(data: $data, where: $where) {
      id
    }
  }
`;
