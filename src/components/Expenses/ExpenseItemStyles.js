import styled from "styled-components";
import Card from "../UI/Card";

export const ExpenseItemCardTag = styled(Card)`
&.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
}
&.expense-item h2{
    color: #3a3a3a;
    font-size: 1rem;
    flex: 1;
    margin: 0 1rem;
    color: white;
    @media (min-width: 580px) {
        font-size: 1.25rem;
        padding: 0.5rem 1.5rem;
    }
  }
`
export const ExpenseItemDescriptionDivTag = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
  @media (min-width: 580px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }
  & h2{
    @media (min-width: 580px) {
        font-size: 1.25rem;
    }
  }

`
export const ExpenseItemPriceDivTag = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
  @media (min-width: 580px) {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
`