import React from "react";
import "./Cards.css";
import moment from "moment/moment";

function Cards(props) {
  const { name, amount, description, date, id, currency, onDelete } = props;

  const handleDeleteClick = () => {
    // Call the onDelete function with the expense's name
    onDelete(name);
  };

  return (
    <div className="expenses-list">
      <div className="card-container">
        <div className="expense-card">
          <div className="card-header">
            <div className="card-category">{name}</div>
            <div className="card-currency">{currency}</div>
            <div className="card-amount">{amount}</div>
            <div className="card-id">{id}</div>
            <div className="card-date">{moment(date).format("YYYY-MM-DD")}</div>
            <div>{description}</div>
            <button className="delete-button" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;