import React from 'react';
import './TableRow.css';
import {Share} from "../../../../types/share";

interface Props {
    share: Share;
}

export const TableRow: React.FC<Props> = (props) => {
    const { share } = props;
    return (
        <tr className="shares-table__shares-item">
            {Object.keys(share).map((value) => (
                <td className={`shares-item__value ${share[value].className}`}>
                    <span {...share[value].attributes}>{share[value].value}</span>
                </td>
            ))}
            <td className="shares-item__btn-container">
                <button className="btn-container__delete-btn"
                    // onclick="this.parentNode.parentNode.remove()"
                >╳</button>
            </td>
        </tr>
    )
}