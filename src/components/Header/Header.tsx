import React from 'react';
import styles from './Header.module.css';
import {Dropdown} from "./Dropdown";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <h1 className={styles.mainTitle}>Калькулятор расчёта среднего</h1>
                <Dropdown/>
            </div>
        </header>
    )
}