import React from 'react';
import './TableHeader.css';
import {TableCol} from "./TableCol";

export const TableHeader = () => {
    return (
        <thead>
            <tr className="shares-table__shares-header">
                <TableCol title="кол-во покупок" className="shares-header__first-col"/>
                <TableCol title="цена покупки" className="shares-header__sec-col"/>
                <TableCol title="сумма" className="shares-header__third-col"/>
                <TableCol className="shares-header__forth-col"/>
            </tr>
        </thead>
    )
}