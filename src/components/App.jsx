import React from 'react';
import AddForm from './AddForm';
import ColorsList from './ColorsList';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            colors: [],
        };

        this.onAddNewColor = this.onAddNewColor.bind(this);
        this.onDeleteColor = this.onDeleteColor.bind(this);
        this.onSetRating = this.onSetRating.bind(this);
    }

    onAddNewColor(color, name) {
        const colors = [
            ...this.state.colors,
            { id: uuidv4(), color, name, rating: 0 },
        ];
        this.setState({ colors });
    }

    onDeleteColor(id) {
        const colors = this.state.colors.filter((x) => x.id !== id);
        this.setState({ colors });
    }

    onSetRating(id, rating) {
        const colors = this.state.colors.map((x) => {
            return x.id === id ? { ...x, rating } : { ...x };
        });
        this.setState({ colors });
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
