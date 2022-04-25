import React, { useCallback } from 'react';
import { AmountSwitches } from "../AmountSwitches";
import './AmountInput.css';

interface Props {
    amount: number;
    onChange: (amount: number) => void;
}

export const AmountInput: React.FC<Props> = (props) => {
    const {amount, onChange} = props;

    const handleChange = useCallback((e: React.ChangeEvent) => {
        onChange(Number((e.target as HTMLInputElement).value));
    }, [onChange]);

    return (
        <div className="shares-form-inputs__amount-container">
            <input value={amount ?? 1} onChange={handleChange} type="text" className="amount-container__input" placeholder="1 шт" required/>
            <span className="amount-container__amounts">шт</span>
            <AmountSwitches amount={amount} onClick={onChange}/>
        </div>
    )
}