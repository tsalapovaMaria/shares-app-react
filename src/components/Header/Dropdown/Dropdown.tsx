import React from 'react';
import Arrow from "../../../icons/svgr/Arrow.js";
import styles from './Dropdown.module.css';
import {Item} from "./Item";

const currency = ['USD', 'EUR', 'RUB'];

export const Dropdown = () => {
    return (
        <div className={styles.dropdownContainer}>
            <label htmlFor="dropdown" className={styles.dropdown}>
                <input type="radio" name="list" value="not_changed" id="bg" checked/>
                <input type="radio" name="list" value="not_changed" id="dropdown"/>
                <label className={styles.bg} htmlFor="bg"/>
                <div className={styles.items}>
                    {currency.map((title, index) =>
                        <Item title={title} value={`${index}_value`} checked={index === 0}/>
                    )}
                    <div className={styles.currentCurrency} id="text">
                        <span className={styles.currentCurrency_text}>USD</span>
                    </div>
                </div>
                <Arrow className={styles.arrow} alt="arrow"/>
            </label>
        </div>
    )
}