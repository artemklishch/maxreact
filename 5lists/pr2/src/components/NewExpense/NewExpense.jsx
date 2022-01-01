import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      if: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const openCloseFormHandler = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="new-expense">
      {isFormOpen ? (
        <ExpenseForm
          closeForm={openCloseFormHandler}
          onSaveExpanseData={saveExpenseHandler}
        />
      ) : (
        <button onClick={openCloseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
