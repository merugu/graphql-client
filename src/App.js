import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Persons from './modules/Persons';
import AddPerson from './modules/AddPerson';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1> Employee Directory </h1>
        <Persons></Persons>
        <AddPerson></AddPerson>
      </div>
    </ApolloProvider>
  );
}

export default App;
