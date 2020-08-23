import gql from 'graphql-tag';

export const FAQS = gql`
  {
    faqs {
      id
      question
      answer
      createdAt
      updatedAt
    }
  }
`;
