// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from 'react-router-dom'

const HomeCard = ({id, title, image, types}) => {
  return (
    <>
        <article className="cardPokemon">
        <h3>#{id}</h3>
        <Link
        to={`/pokemon/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}>
        <img src={image} alt={`Pokemon ${title}`} /></Link>
        <p className="pokeName">{title}</p>
        <ul className="typesCreate">
        {types.map((type, index) => (
    <span key={index} className={`type ${type}`}>
      {type}</span>
         ))}
        </ul>

        </article>
    
    </>
  );
};

export default HomeCard;
