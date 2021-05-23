import React from 'react';
import { connect } from 'react-redux';
import { initialize } from '@data/thunkCreators';
import AddForm from './AddForm';
import ColorsList from './ColorsList';

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized) {
            return <h3>Загрузка...</h3>;
        }

        return (
            <div className="container">
                <AddForm />
                <ColorsList />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.initialized,
    };
};

const mapDispatchToProps = {
    initialize,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
