import React from 'react'
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import  PokemonContainer  from './containers/PokemonContainer';


function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/"
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>
          <PokemonContainer /> 
        </main> 
      </ApolloProvider>
    </div>
  );
}

export default App;
