import React from 'react';
import './Cards.css';
import sampledata from '../sample-data.json';
function Cards({name,amount,description,date}) {
   

  return (
        <div className="expenses-list">

      <div className="card-container">
      <div className="expense-card">
        <div className="card-header">
          <div className="card-category">{name}</div>
        
          <div className="card-amount">{amount}</div>
        <div className="card-date">{date}</div>
        <div>{description}</div>
        <button className="delete-button">delete</button>
        </div>
        {/* <div className="card-amount">5000/</div>
        <div className="card-date">02-05-2023</div> */}
      </div>
    </div>
</div>

    );
}
export default Cards;
