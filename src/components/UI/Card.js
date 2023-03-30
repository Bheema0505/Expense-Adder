import React from 'react';

// import './Card.css';
import { CardDivTag } from './CardStyles';

const Card = (props) => {

  const classes = 'card ' + props.className;

  return <CardDivTag className={classes}>{props.children}</CardDivTag>;
};

export default Card;
