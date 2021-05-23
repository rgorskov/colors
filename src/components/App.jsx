import React from 'react';
import AddForm from './AddForm';
import ColorsList from './ColorsList';

const App = ({
    state,
    onAdd,
    onAsyncAdd,
    onRemove,
    onRate,
    onSort,
    onInputTitle,
    onInputColor,
}) => {
    return (
        <div className="container">
            <AddForm
                inputedTitle={state.colors.inputedTitle}
                inputedColor={state.colors.inputedColor}
                onAddNewColor={onAdd}
                onAsyncAdd={onAsyncAdd}
                onInputTitle={onInputTitle}
                onInputColor={onInputColor}
            />
            <ColorsList
                {...state}
                onDeleteColor={onRemove}
                onSetRating={onRate}
                onSort={onSort}
            />
        </div>
    );
};

export default App;
