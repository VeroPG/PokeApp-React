/* eslint-disable react/jsx-no-undef */
import { useState, useContext } from "react";
import { PokeContext } from "../../../context/PokeContext";
import { useForm } from "react-hook-form";

const New = () => {
  const { register, handleSubmit, reset } = useForm();

  const { setPokemons } = useContext(PokeContext);
  const [isPokemonCreated, setIsPokemonCreated] = useState(false);

  const onSubmit = (data) => {
    if (data.typeOne === data.typeTwo) {
      alert("Type One and Type Two cannot be the same");
      return;
    }

    const newPokemon = {
      id: data.id,
      name: data.name,
      sprites: {
        other: {
          "official-artwork": {
            front_default: data.image,
          },
        },
      },
      types: [
        { type: { name: data.typeOne } },
        { type: { name: data.typeTwo } },
      ],
    };

    setPokemons((pokemons) => [newPokemon, ...pokemons]);
    setIsPokemonCreated(true);
    reset();
  };

  const clearNewPokemon = () => {
    setIsPokemonCreated(false);
    reset();
  };

  const types = [
    { value: "normal", label: "Normal" },
    { value: "fighting", label: "Fighting" },
    { value: "flying", label: "Flying" },
    { value: "poison", label: "Poison" },
    { value: "ground", label: "Ground" },
    { value: "rock", label: "Rock" },
    { value: "bug", label: "Bug" },
    { value: "ghost", label: "Ghost" },
    { value: "steel", label: "Steel" },
    { value: "fire", label: "Fire" },
    { value: "water", label: "Water" },
    { value: "grass", label: "Grass" },
    { value: "electric", label: "Electric" },
    { value: "psychic", label: "Psychic" },
    { value: "ice", label: "Ice" },
    { value: "dragon", label: "Dragon" },
    { value: "dark", label: "Dark" },
    { value: "fairy", label: "Fairy" },
    { value: "unknown", label: "Unknown" },
    { value: "shadow", label: "Shadow" },
  ];

  return (
    <>
      <form className="createPokemon" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create your own Pokemon</h1>
        <input
          id="pokemon-id"
          name="id"
          label="ID"
          placeholder="ID"
          type="number"
          min={1303}
          className="inputCreate"
          {...register("id")}
        />
        <input
          id="pokemon-name"
          label="Name"
          placeholder="Name"
          type="text"
          className="inputCreate"
          {...register("name", { required: true, minLength: 3 })}
        />
        <input
          id="pokemon-image"
          label="Image"
          placeholder="Image URL"
          type="url"
          className="inputCreate"
          {...register("image", { required: true })}
        />

        <select
          id="type-one-select"
          name="typeOne"
          label="Type One"
          placeholder="Please select a type (required)"
          defaultValue=""
          className="inputCreate"
          {...register("typeOne", { required: true })}
        >
          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          id="type-two-select"
          name="typeTwo"
          label="Type Two"
          placeholder="Select a second type (optional)"
          defaultValue=""
          className="inputCreate"
          {...register("typeTwo")}
        >
          {types.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button type="submit">Send</button>
        <button type="button" onClick={clearNewPokemon}>
          Reset
        </button>
      </form>
    </>
  );
};

export default New;
