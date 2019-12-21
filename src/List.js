import React from 'react';
import Card from './Card'
import './List.css';

function List(props) {
  render (
    <section className='List'>
      <header>
        <h1>{props.header};</h1>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
        <Card 
        key= {card.id}
        title= {card.title}
        content= {card.content}
        )}
      </div>
    </section>
  );
}
