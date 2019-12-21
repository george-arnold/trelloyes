import React from 'react';
//import react
import './Card.css';
//import relevant CSS
function Card(props) {
  return(
    <div className='Card'>
      <h2> {props.title}</h2>
      <p>{props.conent}</p>
    </div> 
  )
}

export default Card;

