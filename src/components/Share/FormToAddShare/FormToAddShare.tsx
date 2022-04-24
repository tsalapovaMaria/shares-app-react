import React from 'react';
import './FormToAddShare.css';
import {AmountInput} from "./AmountInput";

export const FormToAddShare = () => {
    return (
        <div className="shares-container__shares-form-container">
            <form action="" className="shares-form-container__shares-form">
                <div className="shares-form__shares-form-inputs">
                    <AmountInput/>
                    <div className="shares-form-inputs__price-container">
                        <input type="text" placeholder="0 $" className="price-container__input" required/>
                    </div>
                </div>
                <div className="shares-form__btn-container">
                    <button className="btn-container__btn-add" type="submit">Добавить</button>
                </div>
            </form>
        </div>
    )
}