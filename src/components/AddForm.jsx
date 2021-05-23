import React, { useRef } from 'react';

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

export default AddForm;
