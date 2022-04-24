import React from 'react';
import './TableCol.css';

interface Props {
    title?: string;
    className?: string;
}

export const TableCol: React.FC<Props> = ({ title, className }) => {
    return (
        <th className={`shares-header__col-title ${className}`}>
            {title && <div>{title}</div>}
        </th>
    )
}