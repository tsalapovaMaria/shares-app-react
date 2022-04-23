import React from 'react';
import Arrow from "../../../icons/arrow.svg";
import styles from './Dropdown.module.css';
import {Item} from "./Item";

const currency = ['USD', 'EUR', 'RUB'];

export const Dropdown = () => {
    return (
        <div className={styles.dropdownContainer}>
            <label htmlFor="dropdown" className={styles.dropdown}>
                <input type="radio" name="list" value="not_changed" id="bg" checked readOnly/>
                <input type="radio" name="list" value="not_changed" id="dropdown" readOnly/>
                <label className={styles.bg} htmlFor="bg"/>
                <div className={styles.items}>
                    {currency.map((title, index) =>
                        <Item title={title} value={`${index}_value`} checked={index === 0}/>
                    )}
                    <div id="text">
                        <div>USD</div>
                    </div>
                </div>
                <img src={Arrow} alt="arrow"/>
            </label>
        </div>
    )
}