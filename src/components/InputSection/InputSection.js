import React from 'react';
import './InputSection.css';
function InputSection(props) {
    return (
        <div className="input-section">
        <label htmlFor="category-select">Category: </label>
        <select id="category-select">
          <option value="Food & Beverage">Food &amp; Beverage</option>
          <option value="Rent">Rent</option>
          <option value="Transport">Transport</option>{" "}
          <option value="Relaxing">Relaxing</option>
        </select>
        <label htmlFor="amount-input">Amount:</label>
        <input type="number" id="amount-input" />
        <label htmlFor="date-input">Date: </label>
        <input type="date" id="date-input" />
        <button id="add-btn">Add</button>
      </div>
    );
}
export default InputSection;