import React from 'react';
import {AmountSwitches} from "../AmountSwitches";
import './AmountInput.css';

export const AmountInput = () => {
    return (
        <div className="shares-form-inputs__amount-container">
            <input type="text" className="amount-container__input" placeholder="1 шт" value="1" required/>
            <span className="amount-container__amounts">шт</span>
            <AmountSwitches/>
        </div>
    )
}