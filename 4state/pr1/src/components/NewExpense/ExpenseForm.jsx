import React, { useState } from "react";
import "./ExpenseForm.css";

// const ExpenseForm = () => {
//   const [enteredTitle, setEnteredTitle] = useState("");
//   const titleChandeHandler = (e) => {
//     setEnteredTitle(e.target.value);
//   };

//   const [enteredAmount, setEnteredAmount] = useState("");
//   const amountChandeHandler = (e) => {
//     setEnteredAmount(e.target.value);
//   };

//   const [enteredDate, setEnteredDate] = useState("");
//   const amountDateHandler = (e) => {
//     setEnteredDate(e.target.value);
//   };

//   return (
//     <form>
//       <div className="new-expense__controls">
//         <div className="new-expense__control">
//           <label>Title</label>
//           <input
//             type="text"
//             onChange={titleChandeHandler}
//             value={enteredTitle}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Amount</label>
//           <input
//             type="number"
//             min="0.01"
//             step="0.01"
//             onChange={amountChandeHandler}
//             value={enteredAmount}
//           />
//         </div>
//         <div className="new-expense__control">
//           <label>Date</label>
//           <input
//             type="date"
//             min="2019-01-01"
//             max="2022-12-31"
//             onChange={amountDateHandler}
//             value={enteredDate}
//           />
//         </div>
//       </div>
//       <div className="new-expense__actions">
//         <button type="submit">Add Expense</button>
//       </div>
//     </form>
//   );
// };

const ExpenseForm = () => {
  const [formData, setFormData] = useState({ title: "", amount: "", date: "" });
  const formStateHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("formData", formData);
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={formStateHandler}
            value={formData.title}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={formStateHandler}
            value={formData.amount}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={formStateHandler}
            value={formData.date}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
