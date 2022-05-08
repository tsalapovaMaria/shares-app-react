import React, { useState } from 'react';
import './FormToAddShare.css';
import {AmountInput} from "./AmountInput";
import {PriceInput} from "./PriceInput";
import {BtnToAdd} from "./BtnToAdd";
import {UsersShareData} from "../../../types/usersShareData";
import { useCallback } from 'react';

interface Props {
    addShare: (share: UsersShareData | null) => void;
}

export const FormToAddShare: React.FC<Props> = (props) => {
    const { addShare } = props;
    const [amount, setAmount] = useState<null | number>(null);
    const [price, setPrice] = useState<null | number>(null);

    const handleClick = useCallback(() => {
        addShare({amount, price, totalPrice: amount * price});
    }, [addShare, amount, price]);

    console.log('amount', amount);
    console.log('price', price);

    return (
        <div className="shares-container__shares-form-container">
            <form action="" className="shares-form-container__shares-form">
                <div className="shares-form__shares-form-inputs">
                    <AmountInput amount={amount} onChange={setAmount}/>
                    <PriceInput onChange={setPrice}/>
                </div>
                <BtnToAdd onClick={handleClick}/>
            </form>
        </div>
    )
}