import React from 'react';
import Star from './Star';

const Rating = ({ rating, onSetRating }) => {
    return (
        <div className="rating">
            {new Array(5).fill(0).map((_, i) => {
                return (
                    <Star
                        key={i}
                        selected={i + 1 <= rating}
                        onClick={() => onSetRating(i + 1)}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
