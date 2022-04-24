import React from 'react';
import './FormToAddShare.css';
import {AmountInput} from "./AmountInput";
import {PriceInput} from "./PriceInput";
import {BtnToAdd} from "./BtnToAdd";

export const FormToAddShare = () => {
    return (
        <div className="shares-container__shares-form-container">
            <form action="" className="shares-form-container__shares-form">
                <div className="shares-form__shares-form-inputs">
                    <AmountInput/>
                    <PriceInput/>
                </div>
                <BtnToAdd/>
            </form>
        </div>
    )
}