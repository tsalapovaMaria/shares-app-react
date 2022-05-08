import React, {useCallback} from 'react';
import './PriceInput.css';

interface Props {
    onChange: (price: number) => void;
}

export const PriceInput: React.FC<Props> = (props) => {
    const {onChange} = props;

    const handleChange = useCallback((e: React.ChangeEvent) => {
        onChange(Number((e.target as HTMLInputElement).value));
    }, [onChange]);

    return (
        <div className="shares-form-inputs__price-container">
            <input onChange={handleChange} type="text" placeholder="0 $" className="price-container__input" required/>
        </div>
    )
}