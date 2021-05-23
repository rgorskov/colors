import actionTypes from './actionTypes';

const initialState = {
    colors: [],
    initialized: false,
    sortBy: 'date',
};

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INITIALIZE: {
            const colors = Object.entries(action.payload).map(([id, color]) => {
                return { id, ...color };
            });
            return {
                ...state,
                initialized: true,
                colors,
            };
        }
        case actionTypes.ADD: {
            return {
                ...state,
                colors: [...state.colors, action.payload],
            };
        }
        case actionTypes.RATE:
            return {
                ...state,
                colors: state.colors.map((c) =>
                    c.id === action.payload.id
                        ? { ...c, rating: action.payload.rating }
                        : c
                ),
            };
        case actionTypes.REMOVE:
            return {
                ...state,
                colors: state.colors.filter((c) => c.id !== action.payload),
            };
        case actionTypes.SORT:
            return { ...state, sortBy: action.sortBy };
        default:
            return state;
    }
};

export default mainReducer;
