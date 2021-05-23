import React from 'react';
import { connect } from 'react-redux';
import { sort } from '@data/actionCreators';

const Sort = ({ sortBy, onSort }) => {
    return (
        <div className="sort">
            <span>Сортировать по:</span>
            <label>
                <input
                    type="radio"
                    checked={sortBy === 'date' ? 'checked' : ''}
                    onChange={() => onSort('date')}
                />
                <span>дате</span>
            </label>
            <label>
                <input
                    type="radio"
                    checked={sortBy === 'name' ? 'checked' : ''}
                    onChange={() => onSort('name')}
                />
                <span>названию</span>
            </label>
            <label>
                <input
                    type="radio"
                    checked={sortBy === 'rating' ? 'checked' : ''}
                    onChange={() => onSort('rating')}
                />
                <span>рейтингу</span>
            </label>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        sortBy: state.sortBy,
    };
};

const mapDispatchToProps = {
    onSort: sort,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
