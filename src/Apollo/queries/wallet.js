import gql from 'graphql-tag';

export const GET_WALLET = gql`
  {
    getWallet {
      id
      name
      cardNo
      balance
    }
  }
`;
