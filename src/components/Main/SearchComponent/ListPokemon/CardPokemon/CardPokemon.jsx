/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";

const CardPokemon = ({ id, title, image, types }) => {
  return (
    <>
      <article className="cardPokemon">
        <h3>#{id}</h3>
        <a href={`/pokemon/${id}`}>
          <img src={image} alt={`Pokemon ${title}`} />
        </a>
        <p className="pokeName">{title}</p>
        <ul className="typesCreate">
        {types.map((type, index) => (
            <span key={index} className={type}>{type}</span>
          ))}
        </ul>
      </article>
    </>
  );
};

export default CardPokemon;
