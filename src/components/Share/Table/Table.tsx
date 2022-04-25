import React from 'react';
import {Share} from '../../../types/share';
import { UsersShareData } from '../../../types/usersShareData';
import './Table.css';
import {TableHeader} from "./TableHeader";
import {TableRow} from "./TableRow";

interface Props {
    shares: Array<UsersShareData>;
}

const firstColClassName = 'shares-header__first-col';
const secColClassName = 'shares-header__sec-col';
const thirdColClassName = 'shares-header__third-col';

export const Table: React.FC<Props> = (props) => {
    const { shares } = props;
    const cells = shares.map(({amount, price, totalPrice}): Share => ({
        amount: {
            value: amount,
            className: firstColClassName,
        },
        price: {
            value: price,
            className: secColClassName,
        },
        totalPrice: {
            value: totalPrice,
            className: thirdColClassName
        }
    }))
    return (
        <div className="shares-container__table-container">
            <table className="table-container__shares-table">
                <TableHeader/>
                <tbody>
                    {cells.map(cell => (
                        <TableRow share={cell}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}