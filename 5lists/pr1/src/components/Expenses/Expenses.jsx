import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === filteredYear
  );
  let expensesContent = <p>No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((e) => (
      <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterExpenses={setFilteredYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
}
export default Expenses;
