import React from 'react';
import {SharesSection} from "../SharesSection";
import './Main.css';

export const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <SharesSection/>
            {/*    <div className="tabs">*/}
            {/*        <div className="tabs__content">*/}
            {/*            <input type="radio" name="inditificator" className="content__radio-btn" id="tab_01" checked>*/}
            {/*                <input type="radio" name="inditificator" className="content__radio-btn" id="tab_02">*/}

            {/*                    <div className="content__tabs-titles">*/}
            {/*                        <label className="tabs-titles__title" for="tab_01">*/}
            {/*                            <span className="title-label__title">Среднее</span>*/}
            {/*                        </label>*/}
            {/*                        <label className="tabs-titles__title" for="tab_02">*/}
            {/*                            <span className="title-label__title">Усреднение позиций</span>*/}
            {/*                        </label>*/}
            {/*                    </div>*/}

            {/*                    <div className="slider"></div>*/}

            {/*                    <div className="tabs__content-text">*/}
            {/*                        <div className="content-text__text tab01">*/}
            {/*                            <div className="text__average-price-container">*/}
            {/*                                <div className="average-price-container__position-cost">*/}
            {/*                                    Средняя цена позиции: <span className="average-output-price" data-currency="$">207,5</span>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="text__current-price-container">*/}
            {/*                                <div className="current-price-container__price">*/}
            {/*                                    <div className="current-price__title">Текущая цена</div>*/}
            {/*                                    <input type="text" placeholder="220" value="220" className="current-price__input">*/}
            {/*                                </div>*/}
            {/*                                <div className="current-price-container__profit">*/}
            {/*                                    <div className="profit__title">Текущий профит</div>*/}
            {/*                                    <div className="profit__price"><span data-currency="$">+ 2 200</span></div>*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="content-text__text tab02">*/}
            {/*                            <div className="text__desired-average-price-container">*/}
            {/*                                <div className="desired-average-price-container__desired-price">*/}
            {/*                                    <div className="desired-price__title">Желаемая средняя цена</div>*/}
            {/*                                    <input type="text" placeholder="205" value="205" className="desired-price__input">*/}
            {/*                                </div>*/}
            {/*                                <div className="desired-average-price-container__current-price">*/}
            {/*                                    <div className="current-price__title">Текущая цена</div>*/}
            {/*                                    <input type="text" placeholder="200" value="200" className="current-price__input">*/}
            {/*                                </div>*/}
            {/*                            </div>*/}
            {/*                            <div className="text__shares-amount">*/}
            {/*                                Количество акций к покупке: <span className="shares-amount__amount-output">10 шт</span>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            </div>
        </main>
    )
}