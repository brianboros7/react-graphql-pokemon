import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { Pokemon } from '../components/Pokemon';
import  {GET_POKEMONS}  from '../graphql/get-pokemon';

function PokemonContainer() {
    const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
        variables: { first: 9 },
    });

    return(
        <section>
            {pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}

        </section>
    )
}

export default PokemonContainer 