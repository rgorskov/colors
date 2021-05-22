import React from 'react';
import ColorInfo from './ColorInfo';
import Rating from './Rating';

const Color = ({ id, name, color, rating, onSetRating, onDeleteColor }) => {
    return (
        <div className="colorItem">
            <button className="deleteColor" onClick={() => onDeleteColor(id)} />
            <ColorInfo {...{ name, color }} />
            <Rating rating={rating} onSetRating={(x) => onSetRating(id, x)} />
        </div>
    );
};

export default Color;
