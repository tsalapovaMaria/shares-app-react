import React, { useCallback, useRef } from 'react';
import { AmountSwitches } from "../AmountSwitches";
import './AmountInput.css';

interface Props {
    amount: number;
    onChange: (amount: number) => void;
}

export const AmountInput: React.FC<Props> = (props) => {
    const {amount, onChange} = props;
    const label = useRef<null | HTMLDivElement>(null);

    const showLabel = (amount: number) => {
        label.current.style.visibility = 'visible';
        label.current.style.top = '8px';
        label.current.style.left = 20 + String(amount).length * 9 + 'px';
    }

    const hideLabel = () => {
        label.current.style.visibility = 'hidden';
    }

    const handleChange = useCallback((e: React.ChangeEvent) => {
        const amountToSet = (e.target as HTMLInputElement).value;
        onChange(Number(amountToSet));
    }, [onChange]);

    return (
        <div className="shares-form-inputs__amount-container">
            <input
                type="text"
                className="amount-container__input"
                placeholder="1 шт"
                value={amount ?? 1}
                onChange={handleChange}
                onFocus={hideLabel}
                onBlur={useCallback(() => showLabel(amount), [amount])}
                required
            />
            <span className="amount-container__amounts" ref={label}>шт</span>
            <AmountSwitches
                amount={amount}
                onClick={onChange}
            />
        </div>
    )
}