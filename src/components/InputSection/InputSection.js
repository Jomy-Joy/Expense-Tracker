import React, { useState } from "react";
import "./InputSection.css";

function InputSection(props) {
  const { onAddExpense } = props;
  // State to store user input
  const [expense, setExpense] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const handleExpense = (e) => {
    setExpense(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleCurrency = (e) => {
    setCurrency(e.target.value);
  };
  const handleAddExpense = (e) => {
    e.preventDefault();

    onAddExpense({
      expenseName: expense,
      date: date,
      amount: amount,
      currency: currency,
    }); // Call onAddExpense with the new expense
    // Clear the input fields or reset the state as needed
  };

  return (
    <form onSubmit={handleAddExpense}>
      <div className="input-section">
        <label htmlFor="list">Expense Name</label>
        <input onChange={handleExpense} />
		
        <label htmlFor="amount-input">Amount: 
		<select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="INR">INR</option>
          <option value="AED">AED</option>
          <option value="JOD">JOD</option>
        </select>
		</label>
        <input onChange={handleCurrency} />
        

        {/* <label htmlFor="currency">Currency</label>
        <input onChange={handleExpense} /> */}
        <label htmlFor="date-input">Date: </label>
        <input onChange={handleDate} type="date" id="date-input" />
        <button type="submit" id="add-btn">
          Add
        </button>
      </div>{" "}
    </form>
  );
}
export default InputSection;
