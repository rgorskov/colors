import React from 'react';
import Color from './Color';
import Sort from './Sort';

const sortColorsByName = (a, b) => a.name.localeCompare(b.name);
const sortColorsByRating = (a, b) => b.rating - a.rating;
const sortColorsByDate = (a, b) => b.date - a.date;

const ColorsList = ({ colors, sortBy, onSetRating, onDeleteColor, onSort }) => {
    const sortedColors = colors.list.sort(
        sortBy == 'name'
            ? sortColorsByName
            : sortBy == 'rating'
            ? sortColorsByRating
            : sortColorsByDate
    );
    if (sortedColors.length) {
        return (
            <>
                <Sort sortBy={sortBy} onSort={onSort} />
                {sortedColors.map((c, i) => (
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
