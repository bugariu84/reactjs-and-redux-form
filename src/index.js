import React from 'react';
import {render} from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 1. Import redux libraries
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

// 2. Create a reducers object
const reducers = {
    form: formReducer
}

// 3. Get formReducer
const reducer = combineReducers(reducers);

// 4. Create the store
let store = createStore(
    reducer,
    window.__REDUX_DEV_TOOL_EXTENSION__ && window.__REDUX_DEV_TOOL_EXTENSION__()
);
render(
    <Provider store={store}>
        <App />
    </Provider>
, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
