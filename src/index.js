import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks'
import client from './config/apollo.config'

import './styles/index.css'

// import components from route
import App from "./components/App";
const Root = document.getElementById('root')

const AppService = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

render(<AppService />, Root);