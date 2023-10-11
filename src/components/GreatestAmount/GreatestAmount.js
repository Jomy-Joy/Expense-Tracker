import React from 'react';
import './GreatestAmount.css';

function GreatestAmount({greatestDate , greatestExpense}) {
    return (
        <>
        <div className='card-block'>
        <div className="greatest-amount">
            <div className="card-content">
                <h2>You spent the most amount of {greatestDate} on ${greatestExpense}</h2>
            </div>
        </div>
        </div>
        
        </>
        
    );
}

export default GreatestAmount;