import React from 'react';
import s from './Star.module.css';

const Star = ({ selected, onClick }) => {
    const className = selected ? s.star + ' ' + s.selected : s.star;
    return (
        <button className={className} onClick={onClick}>
            ★
        </button>
    );
};

export default Star;
