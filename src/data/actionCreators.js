import actionTypes from './actionTypes';

export const initializeSuccess = (colors) => {
    return {
        type: actionTypes.INITIALIZE,
        payload: colors,
    };
};

export const addSuccess = (newColor) => {
    return {
        type: actionTypes.ADD,
        payload: newColor,
    };
};

export const removeSuccess = (id) => {
    return {
        type: actionTypes.REMOVE,
        payload: id,
    };
};

export const rateSuccess = ({ id, rating }) => {
    return {
        type: actionTypes.RATE,
        payload: { id, rating },
    };
};

export const sort = (sortBy) => {
    return {
        type: actionTypes.SORT,
        sortBy,
    };
};
