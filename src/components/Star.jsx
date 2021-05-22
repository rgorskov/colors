import React from 'react';

const Star = ({ selected, onClick }) => {
    const className = selected ? 'star selected' : 'star';
    return (
        <button className={className} onClick={onClick}>
            ★
        </button>
    );
};

export default Star;
