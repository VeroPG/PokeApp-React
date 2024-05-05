/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import { Link } from "react-router-dom";


const CardPokemon = ({ id, title, image, types }) => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      
      <article className="cardPokemon">
          <h3>#{id}</h3>
          <Link
          to={`/pokemon/${id}`}
          onClick={scrollToTop}
          style={{ textDecoration: "none", color: "inherit" }}>
          <img src={image} alt={`Pokemon ${title}`} /></Link>
          <p className="pokeName">{title}</p>
          <ul className="typesCreate">
          {types.map((type) => (
          <span className={type}>{type}</span>
           ))}
          </ul>

          </article>
    
    </>
  );
};

export default CardPokemon;
