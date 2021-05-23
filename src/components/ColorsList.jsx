import React from 'react';
import { connect } from 'react-redux';
import Color from './Color';
import Sort from './Sort';

const sortColorsByName = (a, b) => a.name.localeCompare(b.name);
const sortColorsByRating = (a, b) => b.rating - a.rating;
const sortColorsByDate = (a, b) => b.date - a.date;

const ColorsList = ({ colors, sortBy }) => {
    const sortedColors = colors.sort(
        sortBy === 'name'
            ? sortColorsByName
            : sortBy === 'rating'
            ? sortColorsByRating
            : sortColorsByDate
    );
    if (sortedColors.length) {
        return (
            <>
                <Sort />
                {sortedColors.map((c) => (
                    <Color key={c.id} {...c} />
                ))}
            </>
        );
    } else {
        return <div className="no-colors-message">Список пуст</div>;
    }
};

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        sortBy: state.sortBy,
    };
};

export default connect(mapStateToProps)(ColorsList);
