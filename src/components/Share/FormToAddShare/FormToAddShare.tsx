import React from 'react';
import './FormToAddShare.css';
import {AmountInput} from "./AmountInput";
import {PriceInput} from "./PriceInput";

export const FormToAddShare = () => {
    return (
        <div className="shares-container__shares-form-container">
            <form action="" className="shares-form-container__shares-form">
                <div className="shares-form__shares-form-inputs">
                    <AmountInput/>
                    <PriceInput/>
                </div>
                <div className="shares-form__btn-container">
                    <button className="btn-container__btn-add" type="submit">Добавить</button>
                </div>
            </form>
        </div>
    )
}