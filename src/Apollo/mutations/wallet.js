import gql from 'graphql-tag';

export const FUND_WALLET = gql`
  mutation fundWallet($amount: Int!, $reference: String!) {
    fundWallet(amount: $amount, reference: $reference) {
      id
      name
      cardNo
      balance
    }
  }
`;

export const CHARGE_WALLET = gql`
  mutation chargeWallet($amount: Int!, $reference: String!) {
    chargeWallet(amount: $amount, reference: $reference) {
      id
      name
      cardNo
      balance
    }
  }
`;
