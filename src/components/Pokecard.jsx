import React from 'react'
import '../styles/Pokecard.css'
const Pokecard = ({id, name, type, base_experience}) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className='card'>
      <div className='card-name'>{name}</div>
      <img src={imgUrl} alt={name}  />
      <p>Type: {type}</p>
      <p >EXP: {base_experience}</p>
    </div>
  )
} 

export default Pokecard

