import React from 'react';

interface Props {
    onClick: () => void;
}

export const BtnToAdd: React.FC<Props> = (props) => {
    const {onClick} = props;
    return (
        <div className="shares-form__btn-container">
            <button onClick={onClick} className="btn-container__btn-add" type="submit">Добавить</button>
        </div>
    )
}