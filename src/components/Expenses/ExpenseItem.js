import React from 'react';

import ExpenseDate from './ExpenseDate';
// import Card from '../UI/Card';
// import './ExpenseItem.css';
import { ExpenseItemCardTag, ExpenseItemDescriptionDivTag, ExpenseItemPriceDivTag } from './ExpenseItemStyles';

const ExpenseItem = (props) => {
  return (
    <li>
      <ExpenseItemCardTag className='expense-item'>
        <ExpenseDate date={props.date} />
        <ExpenseItemDescriptionDivTag>
          <h2>{props.title}</h2>
          <ExpenseItemPriceDivTag>₹ {props.amount}</ExpenseItemPriceDivTag>
        </ExpenseItemDescriptionDivTag>
      </ExpenseItemCardTag>
    </li>
  );
};

export default ExpenseItem;
