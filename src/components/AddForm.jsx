import React from 'react';
import { connect } from 'react-redux';
import { add, asyncAdd, inputColor, inputTitle } from '../data/actionCreators';

const AddForm = ({
    inputedTitle,
    inputedColor,
    onAddNewColor,
    onAsyncAdd,
    onInputTitle,
    onInputColor,
}) => {
    return (
        <form className="add-form" onSubmit={(e) => e.preventDefault()}>
            <div className="inputBlock">
                <label htmlFor="name">Название</label>
                <input
                    type="text"
                    id="name"
                    value={inputedTitle}
                    onChange={(e) => onInputTitle(e.target.value)}
                />
            </div>
            <div className="inputBlock">
                <label htmlFor="color">Цвет</label>
                <input
                    type="color"
                    id="color"
                    value={inputedColor}
                    onChange={(e) => onInputColor(e.target.value)}
                />
            </div>
            <div className="buttons">
                <button
                    type="button"
                    className="btn btnGreen"
                    onClick={onAddNewColor}
                >
                    Добавить
                </button>
                <button
                    type="button"
                    className="btn btnGreen"
                    onClick={onAsyncAdd}
                >
                    Добавить с задержкой
                </button>
            </div>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        inputedTitle: state.inputedTitle,
        inputedColor: state.inputedColor,
    };
};

const mapDispatchToProps = {
    onAddNewColor: add,
    onAsyncAdd: asyncAdd,
    onInputTitle: inputTitle,
    onInputColor: inputColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
