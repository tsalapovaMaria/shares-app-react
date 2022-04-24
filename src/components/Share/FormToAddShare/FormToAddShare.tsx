import React from 'react';
import './FormToAddShare.css';
import {AmountSwitches} from "./AmountSwitches";

export const FormToAddShare = () => {
    return (
        <div className="shares-container__shares-form-container">
            <form action="" className="shares-form-container__shares-form">
                <div className="shares-form__shares-form-inputs">
                    <div className="shares-form-inputs__amount-container">
                        <input type="text" className="amount-container__input" placeholder="1 шт" value="1" required/>
                        <span className="amount-container__amounts">шт</span>
                        <AmountSwitches/>
                    </div>
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