import actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';
import { combineReducers } from 'redux';

const sortBy = (state = null, action) => {
    if (action.type === actionTypes.SORT) {
        return action.sortBy;
    }
    return state;
};

const color = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                name: action.name,
                color: action.color,
                id: uuidv4(),
                date: Date.now(),
                rating: 0,
            };
        case actionTypes.RATE:
            return {
                ...state,
                rating: action.rating,
            };
        default:
            return state;
    }
};

const colorsList = (state, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return [...state, color({}, action)];
        case actionTypes.RATE:
            return state.map((c) => (c.id == action.id ? color(c, action) : c));
        case actionTypes.REMOVE:
            return state.filter((c) => c.id !== action.id);
        default:
            return state;
    }
};

const colors = (state = null, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            const list = colorsList(state.list, {
                type: actionTypes.ADD,
                color: state.inputedColor || '#000000',
                name: state.inputedTitle || 'Без названия',
            });
            return { ...state, inputedTitle: '', inputedColor: '', list };
        case actionTypes.RATE:
        case actionTypes.REMOVE:
            return { ...state, list: colorsList(state.list, action) };
        case actionTypes.INPUT_TITLE:
            return { ...state, inputedTitle: action.inputedTitle };
        case actionTypes.INPUT_COLOR:
            return { ...state, inputedColor: action.inputedColor };
        default:
            return state;
    }
};

export default combineReducers({ colors, sortBy });
