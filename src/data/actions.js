import dispatcher from './dispatcher';
import actionTypes from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export default {
    add(color, name) {
        dispatcher.dispatch({
            type: actionTypes.ADD,
            newColor: {
                id: uuidv4(),
                date: new Date().getTime(),
                rating: 0,
                name,
                color,
            },
        });
    },
    remove(id) {
        dispatcher.dispatch({
            type: actionTypes.REMOVE,
            id,
        });
    },
    rate(id, rating) {
        dispatcher.dispatch({
            type: actionTypes.RATE,
            id,
            rating,
        });
    },
    sort(sortBy) {
        dispatcher.dispatch({
            type: actionTypes.SORT,
            sortBy,
        });
    },
};
