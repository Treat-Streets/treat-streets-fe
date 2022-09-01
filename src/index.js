import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Components/App'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://treat-streets-be.herokuapp.com/graphql',
  // uri: 'https://treat-streets-be.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
	</BrowserRouter>
)