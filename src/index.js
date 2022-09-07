import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './Components/App'
import 'mapbox-gl/dist/mapbox-gl.css';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client'

const defaultOptions = {
  query: {
    fetchPolicy: 'no-cache',
  },
}

const client = new ApolloClient({
  uri: 'https://treat-streets-be.herokuapp.com/graphql',
  // uri: 'https://treat-streets-be.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions
});

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
	</BrowserRouter>
)