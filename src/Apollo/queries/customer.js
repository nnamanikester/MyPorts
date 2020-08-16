import gql from 'graphql-tag';

export const CUSTOMER_PROFILE = gql`
  {
    customerProfile {
      id
      firstName
      lastName
      photo
      phone
      gender
      birthDay
      birthMonth
    }
  }
`;

export const CUSTOMER_WALLET = gql`
  {
    customerWallet {
      cardNo
      balance
      name
    }
  }
`;

export const CUSTOMER_SAVES = gql`
  query customerSaves($id: String!) {
    customerSaves(id: $id) {
      id
      product {
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
`;

export const CUSTOMER_REVIEWS = gql`
  query customerReviews($id: String!) {
    customerReviews(id: $id) {
      id
      comment
      rating
      vendor {
        id
        profile {
          id
          name
          logo
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const CUSTOMER_COMMENTS = gql`
  query customerComments($id: String!) {
    customerComments(id: $id) {
      id
      comment
      createdAt
      updatedAt
      product {
        id
        name
        images {
          id
          url
        }
      }
    }
  }
`;

export const CUSTOMER_ORDERS = gql`
  query customerOrders($id: String!) {
    customerOrders(id: $id) {
      id
    }
  }
`;

export const SEARCH_TERMS = gql`
  {
    searchTerms {
      id
      term
    }
  }
`;
