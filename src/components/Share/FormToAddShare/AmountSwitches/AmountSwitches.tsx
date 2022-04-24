import React from 'react';
import './AmountSwitches.css';

export const AmountSwitches = () => {
    return (
        <div className="amount-container__btns">
            <button type="button" className="btns__remove-btn"/>
            <button type="button" className="btns__add-btn"/>
        </div>
    )
}