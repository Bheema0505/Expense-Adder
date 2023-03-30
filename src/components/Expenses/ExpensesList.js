import React from 'react';

import ExpenseItem from './ExpenseItem';
// import './ExpensesList.css';
import { ExpensesListH2Tag, ExpensesListUlTag } from './ExpensesListStyles';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <ExpensesListH2Tag>Found no expenses.</ExpensesListH2Tag>;
  }

  return (
    <ExpensesListUlTag>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ExpensesListUlTag>
  );
};

export default ExpensesList;
