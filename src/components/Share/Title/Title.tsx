import React from 'react';

interface Props {
    text: string;
}

export const Title: React.FC<Props> = ({text}) => (
    <h2 className="shares-article__title">{text}</h2>
)