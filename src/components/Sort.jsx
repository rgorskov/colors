import React from 'react';

const Sort = ({ sortBy, onSort }) => {
    return (
        <div className="sort">
            <span>Сортировать по:</span>
            <label>
                <input
                    type="radio"
                    checked={sortBy == 'date' ? 'checked' : ''}
                    onChange={() => onSort('date')}
                />
                <span>дате</span>
            </label>
            <label>
                <input
                    type="radio"
                    checked={sortBy == 'name' ? 'checked' : ''}
                    onChange={() => onSort('name')}
                />
                <span>названию</span>
            </label>
            <label>
                <input
                    type="radio"
                    checked={sortBy == 'rating' ? 'checked' : ''}
                    onChange={() => onSort('rating')}
                />
                <span>рейтингу</span>
            </label>
        </div>
    );
};

export default Sort;
