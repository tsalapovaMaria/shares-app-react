import React, {useCallback} from 'react';
import './AmountSwitches.css';

interface Props {
    amount: number;
    onClick: (amount: number) => void;
}

export const AmountSwitches: React.FC<Props> = (props) => {
    const {amount, onClick} = props;

    const handleClick = useCallback((share: number) => () => {
        onClick(share);
    }, [onClick]);

    return (
        <div className="amount-container__btns">
            <button onClick={handleClick(amount - 1)} type="button" className="btns__remove-btn"/>
            <button onClick={handleClick(amount + 1)} type="button" className="btns__add-btn"/>
        </div>
    )
}