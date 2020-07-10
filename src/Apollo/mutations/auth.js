import {gql} from 'apollo-boost';

export const SIGNIN = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      token
      user {
        id
        username
        email
        isVendor
        isCustomer
        customer {
          id
          emailSetting {
            id
            promotions
            orders
            rewards
          }
          notificationSetting {
            id
            orders
            promotions
            rewards
            reminders
            inStock
            newProducts
          }
        }
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
      user {
        id
        username
        email
        isVendor
        isCustomer
        customer {
          id
          emailSetting {
            id
            promotions
            orders
            rewards
          }
          notificationSetting {
            id
            orders
            promotions
            rewards
            reminders
            inStock
            newProducts
          }
        }
      }
    }
  }
`;
