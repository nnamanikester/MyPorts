import gql from 'graphql-tag';

export const UPDATE_CUSTOMER = gql`
  mutation updateCustomer(
    $id: String!
    $firstName: String!
    $lastName: String!
    $phone: String
    $photo: String
    $gender: String
    $birthMonth: Int
    $birthDay: Int
  ) {
    updateCustomer(
      id: $id
      firstName: $firstName
      lastName: $lastName
      phone: $phone
      photo: $photo
      gender: $gender
      birthMonth: $birthMonth
      birthDay: $birthDay
    ) {
      id
      firstName
      lastName
      photo
      phone
      birthMonth
      birthDay
      gender
    }
  }
`;

export const CREATE_SEARCH_TERM = gql`
  mutation createSearchTerm($term: String!) {
    createSearchTerm(term: $term) {
      id
      term
    }
  }
`;

export const UPDATE_EMAIL_SETTINGS = gql`
  mutation updateEmailSettings(
    $id: String!
    $orders: Boolean
    $promotions: Boolean
    $rewards: Boolean
  ) {
    updateEmailSettings(
      id: $id
      orders: $orders
      promotions: $promotions
      rewards: $rewards
    ) {
      id
      orders
      promotions
      rewards
    }
  }
`;

export const UPDATE_NOTIFICATION_SETTINGS = gql`
  mutation updateNotificationSettings(
    $id: String!
    $orders: Boolean
    $promotions: Boolean
    $rewards: Boolean
    $reminders: Boolean
    $inStock: Boolean
    $newProducts: Boolean
  ) {
    updateNotificationSettings(
      id: $id
      orders: $orders
      promotions: $promotions
      rewards: $rewards
      reminders: $reminders
      inStock: $inStock
      newProducts: $newProducts
    ) {
      id
      orders
      promotions
      rewards
      reminders
      inStock
      newProducts
    }
  }
`;

export const CLEAR_SAVED_ITEMS = gql`
  mutation deleteSavedItems($customerId: String!) {
    deleteSavedItems(customerId: $customerId) {
      count
    }
  }
`;
