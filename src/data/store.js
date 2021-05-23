import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './reducers';

const initialState = {
    colors: {
        list: [],
        inputedColor: '',
        inputedTitle: '',
    },
    sortBy: 'date',
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
