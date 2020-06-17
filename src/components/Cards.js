import React, { Fragment } from 'react';
import Card from './Card';

const cardList = [1, 2, 3, 4];

const cards = (props) => {
  const allCards = cardList.map((cards) => {
    return (
      <Card
        add={props.add}
        key={cards}
        id={cards}
        buttonColor={props.buttonColor}
      />
    );
  });
  return (
    <Fragment>
      <div className='container'>
        <div className='card-container'>{allCards}</div>
      </div>
      <div className='text-center'>
        <button
          onClick={props.clicked}
          type='submit'
          className='btn btn-primary text-center'
        >
          Start The Game!
        </button>
      </div>
    </Fragment>
  );
};

export default cards;
