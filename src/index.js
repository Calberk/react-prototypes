import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
