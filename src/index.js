import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache(),
});



// Supported in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter >
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  </BrowserRouter>
  
);