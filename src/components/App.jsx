import React from 'react';
import AddForm from './AddForm';
import ColorsList from './ColorsList';
import store from '../data/store';
import actions from '../data/actions';

class App extends React.Component {
    constructor() {
        super();
        this.state = store.getState();

        this.onAddNewColor = actions.add;
        this.onDeleteColor = actions.remove;
        this.onSetRating = actions.rate;
    }

    componentWillMount() {
        store.on('change', () => {
            this.setState(store.getState());
        });
    }

    render() {
        return (
            <div className="container">
                <AddForm onAddNewColor={this.onAddNewColor} />
                <ColorsList
                    {...this.state}
                    onDeleteColor={this.onDeleteColor}
                    onSetRating={this.onSetRating}
                />
            </div>
        );
    }
}

export default App;
