import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
  query products(
    $where: ProductWhereInput
    $orderBy: ProductOrderByInput
    $skip: Int
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    products(
      where: $where
      orderBy: $orderBy
      skip: $skip
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
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
          featured
          boosted
        }
      }
    }
  }
`;

export const GET_SINGLE_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
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

export const PRODUCT_COMMENTS = gql`
  query productComments($id: String!) {
    productComments(id: $id) {
      id
      comment
      createdAt
      customer {
        id
        firstName
        lastName
        photo
      }
    }
  }
`;
