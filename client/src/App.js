import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Container } from 'react-bootstrap';
import Auth from './utils/auth';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';

const httpLink = createHttpLink({
   uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: Auth.getToken() ? `Bearer ${Auth.getToken()}` : '',
      },
   };
});

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
});

function App() {
   const homePage = Auth.loggedIn() ? Profile : Home;
   return (
      <ApolloProvider client={client}>
         <Router>
            <Navbar />
            <Container>
               <Route exact path="/" component={homePage} />
            </Container>
         </Router>
      </ApolloProvider>
   );
}

export default App;
