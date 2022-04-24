import React from 'react';
import './PriceInput.css';

export const PriceInput = () => {
    return (
        <div className="shares-form-inputs__price-container">
            <input type="text" placeholder="0 $" className="price-container__input" required/>
        </div>
    )
}