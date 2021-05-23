import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';

const initialState = {
    colors: [],
    inputedColor: '',
    inputedTitle: '',
    sortBy: 'date',
};

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;
