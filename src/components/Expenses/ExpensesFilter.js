import React from 'react';

// import './ExpensesFilter.css';
import { ExpenseFilterControlDivTag, ExpenseFilterDivTag } from './ExpensesFilterStyles';

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <ExpenseFilterDivTag>
      <ExpenseFilterControlDivTag>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </ExpenseFilterControlDivTag>
    </ExpenseFilterDivTag>
  );
};

export default ExpensesFilter;
