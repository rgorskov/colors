import React, { useRef } from 'react';

const AddForm = ({ onAddNewColor }) => {
    const nameRef = useRef(null),
        colorRef = useRef(null);

    const onButtonClick = () => {
        const name = nameRef.current.value,
            color = colorRef.current.value;
        nameRef.current.value = '';
        onAddNewColor(color, name);
    };

    return (
        <form className="add-form">
            <div className="inputBlock">
                <label htmlFor="name">Название</label>
                <input type="text" id="name" ref={nameRef} />
            </div>
            <div className="inputBlock">
                <label htmlFor="color">Цвет</label>
                <input type="color" id="color" ref={colorRef} />
            </div>
            <button
                type="button"
                className="btn btnGreen"
                onClick={onButtonClick}
            >
                Добавить
            </button>
        </form>
    );
};

export default AddForm;
