import actionTypes from './actionTypes';

export const add = () => {
    return {
        type: actionTypes.ADD,
    };
};

export const remove = (id) => {
    return {
        type: actionTypes.REMOVE,
        id,
    };
};

export const rate = (id, rating) => {
    return {
        type: actionTypes.RATE,
        id,
        rating,
    };
};

export const sort = (sortBy) => {
    return {
        type: actionTypes.SORT,
        sortBy,
    };
};

export const asyncAdd = (color, name) => {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(add(color, name));
        }, 2000);
    };
};

export const inputTitle = (inputedTitle) => {
    return {
        type: actionTypes.INPUT_TITLE,
        inputedTitle,
    };
};

export const inputColor = (inputedColor) => {
    return {
        type: actionTypes.INPUT_COLOR,
        inputedColor,
    };
};
