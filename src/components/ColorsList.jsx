import React from 'react';
import Color from './Color';

const ColorsList = ({ colors, onSetRating, onDeleteColor }) => {
    if (colors.length) {
        return (
            <>
                {colors.map((c, i) => (
                    <Color
                        key={i}
                        onSetRating={onSetRating}
                        onDeleteColor={onDeleteColor}
                        {...c}
                    />
                ))}
            </>
        );
    } else {
        return <div className="no-colors-message">Список пуст</div>;
    }
};

export default ColorsList;
