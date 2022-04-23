import React from 'react';

interface Props {
    title: string;
    value: string;
    checked?: boolean;
}

export const Item: React.FC<Props> = (props) => {
    const {value, checked, title} = props;
    const id = title.toLowerCase();

    return (
        <>
            <input type="radio" name="list" value={value} id={id} checked={checked}/>
            <label htmlFor={id}>{title}</label>
        </>
    )
}