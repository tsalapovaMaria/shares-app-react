import React from 'react';
import {Share} from "../Share";
import './SharesSection.css';

export const SharesSection = () => {
    return (
            <div className="shares-section">
                <Share title="Точки входа"/>
                <Share title="Точки выхода"/>
    {/*        <article className="shares-section__shares-article">*/}
    {/*            <h2 className="shares-article__title">Точки входа</h2>*/}

    {/*            <div className="shares-article__shares-container">*/}
    {/*                <div className="shares-container__table-container">*/}
    {/*                    <table className="table-container__shares-table">*/}
    {/*                        <thead>*/}
    {/*                        <tr className="shares-table__shares-header">*/}
    {/*                            <th className="shares-header__col-title shares-header__first-col">*/}
    {/*                                <div>кол-во акций</div>*/}
    {/*                            </th>*/}
    {/*                            <th className="shares-header__col-title shares-header__sec-col">*/}
    {/*                                <div>цена покупки</div>*/}
    {/*                            </th>*/}
    {/*                            <th className="shares-header__col-title shares-header__third-col">*/}
    {/*                                <div>сумма</div>*/}
    {/*                            </th>*/}
    {/*                            <th className="shares-header__col-title shares-header__forth-col"></th>*/}
    {/*                        </tr>*/}
    {/*                        </thead>*/}
    {/*                        <tbody>*/}
    {/*                        <tr className="shares-table__shares-item">*/}
    {/*                            <td className="shares-item__value shares-item__first-value">*/}
    {/*                                <span>10</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__sec-value">*/}
    {/*                                <span data-currency="$">210</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__third-value">*/}
    {/*                                <span data-currency="$">2100</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__btn-container">*/}
    {/*                                <button className="btn-container__delete-btn"*/}
    {/*                                        onclick="this.parentNode.parentNode.remove()">╳</button>*/}
    {/*                            </td>*/}
    {/*                        </tr>*/}
    {/*                        <tr className="shares-table__shares-item">*/}
    {/*                            <td className="shares-item__value shares-item__first-value">*/}
    {/*                                <span>10</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__sec-value">*/}
    {/*                                <span data-currency="$">205</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__third-value">*/}
    {/*                                <span data-currency="$">2050</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__btn-container">*/}
    {/*                                <button className="btn-container__delete-btn"*/}
    {/*                                        onclick="this.parentNode.parentNode.remove()">╳</button>*/}
    {/*                            </td>*/}
    {/*                        </tr>*/}
    {/*                        </tbody>*/}
    {/*                    </table>*/}
    {/*                </div>*/}

    {/*                <div className="shares-container__shares-form-container">*/}
    {/*                    <form action="" className="shares-form-container__shares-form">*/}
    {/*                        <div className="shares-form__shares-form-inputs">*/}
    {/*                            <div className="shares-form-inputs__amount-container">*/}
    {/*                                <input type="text" className="amount-container__input" placeholder="1 шт" value="1" required>*/}
    {/*                                    <span className="amount-container__amounts">шт</span>*/}

    {/*                                    <div className="amount-container__btns">*/}
    {/*                                        <button type="button" className="btns__remove-btn"></button>*/}
    {/*                                        <button type="button" className="btns__add-btn"></button>*/}
    {/*                                    </div>*/}
    {/*                            </div>*/}
    {/*                            <div className="shares-form-inputs__price-container">*/}
    {/*                                <input type="text" placeholder="215,3 $" className="price-container__input" required>*/}
    {/*                            </div>*/}
    {/*                        </div>*/}
    {/*                        <div className="shares-form__btn-container">*/}
    {/*                            <button className="btn-container__btn-add" type="submit">Добавить</button>*/}
    {/*                        </div>*/}
    {/*                    </form>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </article>*/}
    {/*        <article className="shares-section__shares-article">*/}
    {/*            <h2 className="shares-article__title">Точки выхода</h2>*/}

    {/*            <div className="shares-article__shares-container">*/}
    {/*                <div className="shares-container__table-container">*/}
    {/*                    <table className="table-container__shares-table">*/}
    {/*                        <thead>*/}
    {/*                        <tr className="shares-table__shares-header">*/}
    {/*                            <th className="shares-header__col-title shares-header__first-col">*/}
    {/*                                <div>кол-во акций</div>*/}
    {/*                            </th>*/}
    {/*                            <th className="shares-header__col-title shares-header__sec-col">*/}
    {/*                                <div>цена покупки</div>*/}
    {/*                            </th>*/}
    {/*                            <th className="shares-header__col-title shares-header__third-col">*/}
    {/*                                <div>сумма</div>*/}
    {/*                            </th>*/}
    {/*                            <th className="shares-header__col-title shares-header__forth-col"></th>*/}
    {/*                        </tr>*/}
    {/*                        </thead>*/}
    {/*                        <tbody>*/}
    {/*                        <tr className="shares-table__shares-item">*/}
    {/*                            <td className="shares-item__value shares-item__first-value">*/}
    {/*                                <span>5</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__sec-value">*/}
    {/*                                <span data-currency="$">215</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__third-value">*/}
    {/*                                <span data-currency="$">1075</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__btn-container">*/}
    {/*                                <button className="btn-container__delete-btn"*/}
    {/*                                        onclick="this.parentNode.parentNode.remove()">╳</button>*/}
    {/*                            </td>*/}
    {/*                        </tr>*/}
    {/*                        <tr className="shares-table__shares-item">*/}
    {/*                            <td className="shares-item__value shares-item__first-value">*/}
    {/*                                <span>1</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__sec-value">*/}
    {/*                                <span data-currency="$">220</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__value shares-item__third-value">*/}
    {/*                                <span data-currency="$">220</span>*/}
    {/*                            </td>*/}
    {/*                            <td className="shares-item__btn-container">*/}
    {/*                                <button className="btn-container__delete-btn"*/}
    {/*                                        onclick="this.parentNode.parentNode.remove()">╳</button>*/}
    {/*                            </td>*/}
    {/*                        </tr>*/}
    {/*                        </tbody>*/}
    {/*                    </table>*/}
    {/*                </div>*/}

    {/*                <div className="shares-container__shares-form-container">*/}
    {/*                    <form action="" className="shares-form-container__shares-form">*/}
    {/*                        <div className="shares-form__shares-form-inputs">*/}
    {/*                            <div className="shares-form-inputs__amount-container">*/}
    {/*                                <input type="text" className="amount-container__input" placeholder="1 шт" value="1" required>*/}
    {/*                                    <span className="amount-container__amounts">шт</span>*/}

    {/*                                    <div className="amount-container__btns">*/}
    {/*                                        <button type="button" className="btns__remove-btn"></button>*/}
    {/*                                        <button type="button" className="btns__add-btn"></button>*/}
    {/*                                    </div>*/}
    {/*                            </div>*/}
    {/*                            <div className="shares-form-inputs__price-container">*/}
    {/*                                <input type="text" placeholder="215,3 $" className="price-container__input" required>*/}
    {/*                            </div>*/}
    {/*                        </div>*/}
    {/*                        <div className="shares-form__btn-container">*/}
    {/*                            <button className="btn-container__btn-add" type="submit">Добавить</button>*/}
    {/*                        </div>*/}
    {/*                    </form>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </article>*/}
        </div>
    )
}