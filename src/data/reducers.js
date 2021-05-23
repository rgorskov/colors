import actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const mainReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ADD: {
            const newColor = {
                name: state.inputedTitle,
                color: state.inputedColor || '#000000',
                id: uuidv4(),
                date: Date.now(),
                rating: 0,
            };
            return {
                ...state,
                inputedTitle: '',
                inputedColor: '',
                colors: [...state.colors, newColor],
            };
        }
        case actionTypes.RATE:
            return {
                ...state,
                colors: state.colors.map((c) =>
                    c.id === action.id ? { ...c, rating: action.rating } : c
                ),
            };
        case actionTypes.REMOVE:
            return {
                ...state,
                colors: state.colors.filter((c) => c.id !== action.id),
            };
        case actionTypes.INPUT_TITLE:
            return { ...state, inputedTitle: action.inputedTitle };
        case actionTypes.INPUT_COLOR:
            return { ...state, inputedColor: action.inputedColor };
        case actionTypes.SORT:
            return { ...state, sortBy: action.sortBy };
        default:
            return state;
    }
};

export default mainReducer;
