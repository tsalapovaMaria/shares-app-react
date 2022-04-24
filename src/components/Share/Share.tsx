import React from 'react';
import {Title} from "./Title";
import {Table} from "./Table";
import {FormToAddShare} from "./FormToAddShare";
import './Share.css';

interface Props {
    title: string;
}

export const Share: React.FC<Props> = (props) => {
    const {title} = props;

    return (
        <div className="shares-section__shares-article">
            <Title text={title}/>
            <div className="shares-article__shares-container">
                <Table shares={[{ amount: 1, price: 2}]}/>
                <FormToAddShare/>
            </div>
        </div>
    )
}