import colorsApi from './api';
import {
    addSuccess,
    initializeSuccess,
    rateSuccess,
    removeSuccess,
} from './actionCreators';

export const initialize = () => {
    return async (dispatch) => {
        const colors = await colorsApi.getAll();
        dispatch(initializeSuccess(colors));
    };
};

export const add = ({ name, color }) => {
    return async (dispatch) => {
        const newColor = { name, color, rating: 0, date: Date.now() };
        const dbEntry = await colorsApi.add(newColor);
        const id = dbEntry.name;
        dispatch(addSuccess({ id, ...newColor }));
    };
};

export const rate = (id, rating) => {
    return async (dispatch) => {
        await colorsApi.rate({ id, rating });
        dispatch(rateSuccess({ id, rating }));
    };
};

export const remove = (id) => {
    return async (dispatch) => {
        await colorsApi.remove(id);
        dispatch(removeSuccess(id));
    };
};
