import React from 'react';
import Arrow from "../../../icons/arrow.svg";
import styles from './Dropdown.module.css';

export const Dropdown = () => {
    return (
        <div className={styles.dropdownContainer}>
            <label htmlFor="dropdown" className={styles.dropdown}>
                <input type="radio" name="list" value="not_changed" id="bg" checked readOnly/>
                <input type="radio" name="list" value="not_changed" id="dropdown" readOnly/>
                <label className={styles.bg} htmlFor="bg"/>
                <div className={styles.items}>
                    <input type="radio" name="list" value="first_value" id="usd" checked readOnly/>
                    <label htmlFor="usd">USD</label>
                    <input type="radio" name="list" value="second_value" id="eur" readOnly/>
                    <label htmlFor="eur">EUR</label>
                    <input type="radio" name="list" value="second_value" id="rub" readOnly/>
                    <label htmlFor="rub">
                        <div>RUB</div>
                    </label>
                    <div id="text">
                        <div>USD</div>
                    </div>
                </div>
                <img src={Arrow} alt="arrow"/>
            </label>
        </div>
    )
}