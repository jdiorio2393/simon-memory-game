import React, { Fragment } from 'react';

const card = (props) => {
  return (
    <Fragment>
      <div
        className='simon-card'
        style={{ backgroundColor: 'red' }}
        id={props.id}
        onClick={props.add}
      >
        Card
      </div>
    </Fragment>
  );
};

export default card;
