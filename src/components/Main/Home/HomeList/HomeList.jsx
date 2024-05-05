// eslint-disable-next-line no-unused-vars
import React from "react";
import HomeCard from "./HomeCard/HomeCard";

const HomeList = ({pokemons}) => {
  // ,loadMorePokemon
  return (
  
    <section className="homeListPokemon">
      {pokemons.map(pokemon => (
        <HomeCard 
          key={pokemon.id}
          title={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          image={pokemon.sprites.other["official-artwork"].front_default}
          id={pokemon.id}
          types={pokemon.types.map(typeInfo => typeInfo.type.name)}        
        />
      ))}

    </section>
  );
};

export default HomeList;
