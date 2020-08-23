import gql from 'graphql-tag';

export const PAGE = gql`
  query page($slug: String!) {
    page(slug: $slug) {
      id
      title
      content
      slug
      updatedAt
      createdAt
    }
  }
`;
