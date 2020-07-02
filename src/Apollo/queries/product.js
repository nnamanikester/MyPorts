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
        }
      }
    }
  }
`;
