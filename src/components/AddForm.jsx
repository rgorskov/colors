import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../data/thunkCreators';

const AddForm = ({ onAddNewColor }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#000000');

    const onInputName = (e) => {
        setName(e.target.value);
    };
    const onInputColor = (e) => {
        setColor(e.target.value);
    };

    const onAddClick = () => {
        onAddNewColor({ name, color });

        setName('');
    };

    return (
        <form className="add-form" onSubmit={(e) => e.preventDefault()}>
            <div className="inputBlock">
                <label htmlFor="name">Название</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={onInputName}
                />
            </div>
            <div className="inputBlock">
                <label htmlFor="color">Цвет</label>
                <input
                    type="color"
                    id="color"
                    value={color}
                    onChange={onInputColor}
                />
            </div>
            <div className="buttons">
                <button
                    type="button"
                    className="btn btnGreen"
                    onClick={onAddClick}
                >
                    Добавить
                </button>
            </div>
        </form>
    );
};

const mapDispatchToProps = {
    onAddNewColor: add,
};

export default connect(null, mapDispatchToProps)(AddForm);
