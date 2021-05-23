import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from './data/store';
import {
    add,
    asyncAdd,
    inputColor,
    inputTitle,
    rate,
    remove,
    sort,
} from './data/actionCreators';

const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                onAdd={(name, color) => store.dispatch(add(name, color))}
                onAsyncAdd={(name, color) =>
                    store.dispatch(asyncAdd(name, color))
                }
                onRemove={(id) => store.dispatch(remove(id))}
                onRate={(id, rating) => store.dispatch(rate(id, rating))}
                onSort={(sortBy) => store.dispatch(sort(sortBy))}
                onInputTitle={(title) => store.dispatch(inputTitle(title))}
                onInputColor={(color) => store.dispatch(inputColor(color))}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};

render();

store.subscribe(render);
