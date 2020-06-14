import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

import { gql } from 'apollo-boost';
// or you can use `import gql from 'graphql-tag';` instead

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));

//
//

//
//
//
//

//

//

//

//
//
//
//
//
//

import React from 'react';
import { render } from 'react-dom';

import { ApolloProvider } from '@apollo/react-hooks';

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

render(<App />, document.getElementById('root'));

//
//
//
//
//
//
//
//
//
//
//

//
// import React from 'react';
import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
