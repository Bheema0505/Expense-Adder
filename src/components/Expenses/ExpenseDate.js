import React from 'react';
import { ExpenseDateDayDivTag, ExpenseDateDivTag, ExpenseDateMonthDivTag, ExpenseDateYearDivTag } from './ExpenseDateStyles';

// import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <ExpenseDateDivTag>
      <ExpenseDateMonthDivTag>{month}</ExpenseDateMonthDivTag>
      <ExpenseDateYearDivTag>{year}</ExpenseDateYearDivTag>
      <ExpenseDateDayDivTag>{day}</ExpenseDateDayDivTag>
    </ExpenseDateDivTag>
  );
};

export default ExpenseDate;
