// eslint-disable-next-line no-unused-vars
import { useEffect, useState, useContext } from "react";
import { PokeContext } from "../../../context/PokeContext";
import HomeList from "./HomeList";
import axios from "axios";

const Home = () => {
  // const [nextBatch, setNexBatch] = useState(0);
  const { pokemons, setPokemons } = useContext(PokeContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (pokemons.length === 0) {
      fetchAllPokemon();
    }
  }, [pokemons]);

  const fetchAllPokemon = async () => {
    setLoading(true);
    let allPokemon = [];

    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=800`
      );
      allPokemon = response.data.results;

      const pokemonData = await Promise.all(
        allPokemon.map(async (pokemon) => {
          const pokemonDataRes = await axios.get(pokemon.url);
          return pokemonDataRes.data;
        })
      );

      setPokemons(pokemonData);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
    } finally {
      setLoading(false);
    }
  };


  console.log(pokemons);

  return (
    <>
      {" "}
      {loading ? (
        <div className="pokeloading"></div>
      ) : (
        <HomeList pokemons={pokemons} />
      )}
    </>
  );
};

export default Home;
