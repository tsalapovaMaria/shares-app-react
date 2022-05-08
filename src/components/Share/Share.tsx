import React, {useCallback} from 'react';
import {Title} from "./Title";
import {Table} from "./Table";
import {FormToAddShare} from "./FormToAddShare";
import './Share.css';
import { useState } from 'react';
import { UsersShareData } from "../../types/usersShareData";

interface Props {
    title: string;
}

export const Share: React.FC<Props> = (props) => {
    const {title} = props;
    const [shares, setShares] = useState<[] | Array<UsersShareData>>([]);

    const handleAddShare = useCallback((newShare: UsersShareData) => {
        setShares([...shares, newShare]);
    }, [shares]);

    return (
        <div className="shares-section__shares-article">
            <Title text={title}/>
            <div className="shares-article__shares-container">
                <Table shares={shares}/>
                <FormToAddShare addShare={handleAddShare}/>
            </div>
        </div>
    )
}