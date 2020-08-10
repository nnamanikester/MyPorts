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
