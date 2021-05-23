import React from 'react';
import { connect } from 'react-redux';
import { rate, remove } from '../data/actionCreators';
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

const mapDispatchToProps = {
    onDeleteColor: remove,
    onSetRating: rate,
};

export default connect(null, mapDispatchToProps)(Color);
