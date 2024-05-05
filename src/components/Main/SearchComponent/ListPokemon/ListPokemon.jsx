/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CardPokemon from "./CardPokemon"



// eslint-disable-next-line react/prop-types
const ListPokemon = ({pokemons}) => {

  console.log(pokemons)

  return (
  
    <section className="list_pokemon">
      {pokemons.map(pokemon => (
        <CardPokemon 
          key={pokemon.id}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          image={pokemon.sprites.other['official-artwork'].front_default}
          id={pokemon.id}
          types={pokemon.types.map(typeInfo => typeInfo.type.name)}  
        />
      ))}
    </section>
  );
};

export default ListPokemon;
