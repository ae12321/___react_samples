import React from 'react';
import './card.css';

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div className="typeName">
          type: {pokemon.types.map((type) => type.type.name).join(',')}
        </div>
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">height: {pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">weight: {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">
            abilities: {pokemon.abilities.map((a) => a.ability.name).join(',')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
