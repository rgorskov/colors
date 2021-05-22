import Emitter from 'events';
import dispatcher from './dispatcher';
import actionTypes from './actionTypes';

class Store extends Emitter {
    constructor() {
        super();
        this.state = {
            colors: [],
        };
    }

    getState() {
        return this.state;
    }

    reduce(action) {
        switch (action.type) {
            case actionTypes.ADD: {
                this.state.colors = [...this.state.colors].concat(
                    action.newColor
                );
                this.emit('change');
                break;
            }
            case actionTypes.REMOVE: {
                this.state.colors = this.state.colors.filter(
                    (x) => x.id !== action.id
                );
                this.emit('change');
                break;
            }
            case actionTypes.RATE: {
                this.state.colors = this.state.colors.map((x) => {
                    return x.id === action.id
                        ? { ...x, rating: action.rating }
                        : { ...x };
                });
                this.emit('change');
                break;
            }
        }
    }
}

const store = new Store();
dispatcher.register(store.reduce.bind(store));

export default store;
// import actionTypes from './actionTypes';
// import dispatcher from './dispatcher';
// import { ReduceStore } from 'flux/utils';

// class Store extends ReduceStore {
//     constructor() {
//         super(dispatcher);
//     }

//     getInitialState() {
//         return {
//             colors: [],
//             sortBy: 'date',
//         };
//     }

//     reduce(state, action) {
//         switch (action.type) {
//             case actionTypes.ADD: {
//                 let colors = [...state.colors].concat(action.newColor);
//                 return {
//                     ...state,
//                     colors,
//                 };
//             }
//             case actionTypes.REMOVE: {
//                 let colors = state.colors.filter((x) => x.id !== action.id);
//                 return {
//                     ...state,
//                     colors,
//                 };
//             }
//             case actionTypes.RATE: {
//                 let colors = this.state.colors.map((x) => {
//                     return x.id === action.id
//                         ? { ...x, rating: action.rating }
//                         : { ...x };
//                 });
//                 return {
//                     ...state,
//                     colors,
//                 };
//             }
//             case actionTypes.SORT: {
//                 let sortBy = ['date', 'name'].includes(action.sortBy)
//                     ? action.sortBy
//                     : 'date';
//                 return {
//                     ...state,
//                     sortBy,
//                 };
//             }
//             default:
//                 return state;
//         }
//     }
// }

// export default new Store();
